import { createReducer } from "@reduxjs/toolkit";
import {
  addTodoSuccess,
  deleteTodoSucces,
  fetchTodosSuccess,
  toggleTodoSuccess,
} from "./todos-actions";

const todosReducer = createReducer([], {
  [fetchTodosSuccess]: (_, action) => action.payload,
  [addTodoSuccess]: (state, action) => {
    return [...state, { ...action.payload }];
  },
  [deleteTodoSucces]: (state, action) =>
    state.filter((todo) => todo.id !== action.payload),
  [toggleTodoSuccess]: (state, { payload }) =>
    state.map((todo) => (todo.id === payload.id ? payload : todo)),
});

export default todosReducer;
