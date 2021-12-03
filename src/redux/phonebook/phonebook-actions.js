import { createAction } from "@reduxjs/toolkit";

export const fetchContactsSuccess = createAction("contacts/get");

export const addContactSucces = createAction("contacts/add");

export const deleteContactSucces = createAction("contacts/delete");

export const changeFilter = createAction("contacts/filter");
