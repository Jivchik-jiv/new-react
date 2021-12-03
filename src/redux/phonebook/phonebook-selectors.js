import { createSelector } from "@reduxjs/toolkit";

const selectContacts = (state) => state.phonebook.contacts;

export const selectFilter = (state) => state.phonebook.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
