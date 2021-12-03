import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addContactSucces,
  changeFilter,
  deleteContactSucces,
  fetchContactsSuccess,
} from "./phonebook-actions";

const contactsReducer = createReducer([], {
  [addContactSucces]: (state, action) => [{ ...action.payload }, ...state],
  [deleteContactSucces]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
  [fetchContactsSuccess]: (_, action) => action.payload.reverse(),
});

const filterReducer = createReducer("", {
  [changeFilter]: (_, action) => action.payload,
});

const phonebookReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default phonebookReducer;
