import { personalContactsApi } from "../../api/personalContacts-api";
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
} from "./personalContacts-actions";

export const fetchPersonalContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());
  try {
    let responce = await personalContactsApi.fetchContacts();
    dispatch(fetchContactsSuccess(responce));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

export const addPersonalContact = (contact) => async (dispatch) => {
  dispatch(addContactRequest());

  try {
    let responce = await personalContactsApi.addContact(contact);
    dispatch(addContactSuccess(responce));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};
