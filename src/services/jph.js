import axios from "axios";

const url = "https://jsonplaceholder.typicode.com";

const get =
  (service) =>
  async (id = "") =>
    (await axios.get(`${url}/${service}/${id}`)).data;

export const getUsers = get("users");
export const getToDos = get("todos");
export const getPosts = get("posts");
