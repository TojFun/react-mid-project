import axios from "axios";

const url = "https://jsonplaceholder.typicode.com";

const getData = async () => {
  try {
    const [users, todos, posts] = await Promise.all(
      ["users", "todos", "posts"].map(
        async (service) => (await axios.get(`${url}/${service}`)).data
      )
    );
    return {
      ok: true,
      data: users.map((user) => {
        return {
          ...user,
          todos: todos.filter(({ userId }) => userId === user.id),
          posts: posts.filter(({ userId }) => userId === user.id),
        };
      }),
    };
  } catch (error) {
    return { ok: false, error };
  }
};

export default getData;
