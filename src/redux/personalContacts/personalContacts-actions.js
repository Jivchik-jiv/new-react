import { createAction } from "@reduxjs/toolkit";

export const fetchContactsRequest = createAction("contacts/getRequest");
export const fetchContactsSuccess = createAction("contacts/getSuccess");
export const fetchContactsError = createAction("contacts/getError");

export const addContactRequest = createAction("contacts/addRequest");
export const addContactSuccess = createAction("contacts/addSuccess");
export const addContactError = createAction("contacts/addError");

export const deleteContactRequest = createAction("contacts/deleteRequest");
export const deleteContactSuccess = createAction("contacts/deleteSuccess");
export const deleteContactError = createAction("contacts/deleteError");
