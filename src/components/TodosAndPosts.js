import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";

import Post from "./Post";
import Todo from "./Todo";
import UserList from "./UserList";

function TodosAndPosts({ user, setUser }) {
  const [listSize, setListSize] = useState(window.innerHeight / 3);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setListSize(window.innerHeight / 3)
    );
  });

  return (
    <Grid container>
      <Grid item xs={6} sm={12} marginBottom="2%" marginTop="1%">
        <UserList
          title={`${user.name}'s To-Dos`}
          list={user.todos}
          listSize={listSize}
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
                      todos: user.todos.map((currentTodo) =>
                        currentTodo.id === todo.id
                          ? { ...todo, completed: checked }
                          : currentTodo
                      ),
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
          title={`${user.name}'s Posts`}
          list={user.posts}
          listSize={listSize}
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
