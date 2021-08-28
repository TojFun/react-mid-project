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
        const newToDos = [];

        for (const todo of todos) {
          if (todo.userId !== user.id) continue;

          if (todo.completed) newToDos.push(todo);
          else newToDos.unshift(todo);
        }

        return {
          ...user,
          todos: newToDos,
          posts: posts.filter(({ userId }) => userId === user.id),
        };
      }),
    };
  } catch (error) {
    return { ok: false, error };
  }
};

export default getData;
