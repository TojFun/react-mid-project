import axios from "axios";

const url = "https://jsonplaceholder.typicode.com";

const getData = async () => {
  const [users, todos, posts] = await Promise.all(
    ["users", "todos", "posts"].map(
      async (service) => (await axios.get(`${url}/${service}`)).data
    )
  );

  return users.map((user) => {
    return {
      ...user,
      todos: todos.filter(({ userId }) => userId === user.id),
      posts: posts.filter(({ userId }) => userId === user.id),
    };
  });
};

export default getData;
