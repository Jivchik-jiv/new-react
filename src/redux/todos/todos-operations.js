import { todosApi } from "../../api/todos-api";
import {
  addTodoError,
  addTodoRequest,
  addTodoSuccess,
  deleteTodoError,
  deleteTodoRequest,
  deleteTodoSucces,
  fetchTodosError,
  fetchTodosRequest,
  fetchTodosSuccess,
  toggleTodoError,
  toggleTodoRequest,
  toggleTodoSuccess,
} from "./todos-actions";

export const fetchTodos = () => (dispatch) => {
  dispatch(fetchTodosRequest());

  todosApi
    .fetchTodos()
    .then((data) => dispatch(fetchTodosSuccess(data)))
    .catch((error) => dispatch(fetchTodosError(error)));
};

export const addTodo = (text) => (dispatch) => {
  dispatch(addTodoRequest());
  const newTodo = {
    title: text,
    completed: false,
  };

  todosApi
    .addTodo(newTodo)
    .then((successTodo) => {
      dispatch(addTodoSuccess(successTodo));
    })
    .catch((error) => {
      dispatch(addTodoError(error));
    });
};

export const deleteTodo = (id) => (dispatch) => {
  dispatch(deleteTodoRequest());

  todosApi
    .deleteTodo(id)
    .then((responce) => {
      if (responce.status === 200) {
        dispatch(deleteTodoSucces(id));
      }
    })
    .catch((error) => {
      dispatch(deleteTodoError(error));
    });
};

export const toggleTodo =
  ({ id, completed }) =>
  (dispatch) => {
    dispatch(toggleTodoRequest());

    const update = { id, completed };
    todosApi
      .toggleTodo(update)
      .then((changedTodo) => {
        dispatch(toggleTodoSuccess(changedTodo));
      })
      .catch((error) => {
        dispatch(toggleTodoError());
      });
  };
