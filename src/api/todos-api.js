import axios from "axios";

export const todosApi = {
  fetchTodos() {
    return axios
      .get("http://localhost:3001/todos")
      .then((response) => response.data);
  },
  addTodo(todo) {
    return axios
      .post("http://localhost:3001/todos", todo)
      .then((responce) => responce.data);
  },
  deleteTodo(id) {
    return axios
      .delete(`http://localhost:3001/todos/${id}`)
      .then((result) => result);
  },
  toggleTodo({ id, completed }) {
    return axios
      .patch(`http://localhost:3001/todos/${id}`, { completed })
      .then((responce) => responce.data);
  },
};
