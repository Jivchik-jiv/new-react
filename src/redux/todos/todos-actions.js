import { createAction } from "@reduxjs/toolkit";

// const initialState = [
//     { title: "Test1 todo", id: 1, completed: true},
//     { title: "Test2 todo", id: 2, completed: false},
//     { title: "Test3 todo", id: 3, completed: false},
//     { title: "Test4 todo", id: 4, completed: false},
//     { title: "Test5 todo", id: 5, completed: true}
// ];

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
