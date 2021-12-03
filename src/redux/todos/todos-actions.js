import { createAction } from "@reduxjs/toolkit";

export const fetchTodosRequest = createAction("todos/fetchRequest");
export const fetchTodosSuccess = createAction("todos/fetchSuccess");
export const fetchTodosError = createAction("todos/fetchError");

export const addTodoRequest = createAction("todos/addRequest");
export const addTodoSuccess = createAction("todos/addSuccess");
export const addTodoError = createAction("todos/addError");

export const deleteTodoRequest = createAction("todos/deleteRequest");
export const deleteTodoSucces = createAction("todos/deleteSucces");
export const deleteTodoError = createAction("todos/deleteError");

export const toggleTodoRequest = createAction("todos/toggleRequest");
export const toggleTodoSuccess = createAction("todos/toggleSuccess");
export const toggleTodoError = createAction("todos/toggleError");
