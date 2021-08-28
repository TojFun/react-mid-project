import Grid from "@material-ui/core/Grid";
import { useEffect, useState } from "react";

import Post from "./Post";
import Todo from "./Todo";
import UserList from "./UserList";

const listSizeNum = 3.5;

function TodosAndPosts({ user, setUser }) {
  const [listSize, setListSize] = useState(window.innerHeight / listSizeNum);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setListSize(window.innerHeight / listSizeNum)
    );
  }, []);

  return (
    <Grid container>
      <Grid item xs={6} sm={12} marginBottom="2%" marginTop="1%">
        <UserList
          itemName="To-Do"
          name={user.name}
          list={user.todos}
          listSize={listSize}
          addItem={(title, body) =>
            setUser({
              ...user,
              todos: [
                {
                  userId: user.id,
                  id: user.todos.length,
                  title,
                  completed: false,
                },
                ...user.todos,
              ],
            })
          }
        >
          {({ index, style }) => {
            const todo = user.todos[index];

            return (
              <Grid key={`todo${todo.id}`} item xs={12} style={style}>
                <Todo
                  todo={todo}
                  check={(checked) => {
                    setUser({
                      ...user,
                      todos: checked
                        ? [
                            ...user.todos.filter(({ id }) => id !== todo.id),
                            { ...todo, completed: true },
                          ]
                        : [
                            { ...todo, completed: false },
                            ...user.todos.filter(({ id }) => id !== todo.id),
                          ],
                    });
                  }}
                />
              </Grid>
            );
          }}
        </UserList>
      </Grid>

      <Grid item xs={6} sm={12} marginBottom="2%" marginTop="1%">
        <UserList
          itemName="Post"
          name={user.name}
          list={user.posts}
          listSize={listSize}
          addItem={(title, body) =>
            setUser({
              ...user,
              posts: [
                {
                  userId: user.id,
                  id: user.posts.length,
                  title,
                  body,
                },
                ...user.posts,
              ],
            })
          }
        >
          {({ index, style }) => {
            const post = user.posts[index];

            return (
              <Grid key={`post${post.id}`} item xs={12} style={style}>
                <Post post={post} />
              </Grid>
            );
          }}
        </UserList>
      </Grid>
    </Grid>
  );
}

export default TodosAndPosts;
