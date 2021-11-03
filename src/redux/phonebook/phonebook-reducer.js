import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addContact, changeFilter, deleteContact } from "./phonebook-actions";

const contactsReducer = createReducer([], {
  [addContact]: (state, action) => [{ ...action.payload }, ...state],
  [deleteContact]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const filterReducer = createReducer("", {
  [changeFilter]: (_, action) => action.payload,
});

const phonebookReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default phonebookReducer;
