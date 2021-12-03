import { createReducer } from "@reduxjs/toolkit";
import {
  addContactSuccess,
  deleteContactSuccess,
  fetchContactsSuccess,
} from "./personalContacts-actions";

export const contactsReducer = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, action) => [action.payload, ...state],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});
