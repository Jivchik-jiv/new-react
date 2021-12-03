import { contactsApi } from "../../api/contacts-api";
import {
  fetchContactsSuccess,
  addContactSucces,
  deleteContactSucces,
} from "./phonebook-actions";

export const fetchContacts = () => (dispatch) => {
  contactsApi.fetchContacts().then((contacts) => {
    dispatch(fetchContactsSuccess(contacts));
  });
};

export const addContact = (contact) => (dispatch) => {
  contactsApi.addContact(contact).then((addedContact) => {
    dispatch(addContactSucces(addedContact));
  });
};

export const deleteContact = (id) => (dispatch) => {
  contactsApi.deleteContact(id).then(() => {
    dispatch(deleteContactSucces(id));
  });
};

export const changeFilter = (filter) => (dispatch) => {};
