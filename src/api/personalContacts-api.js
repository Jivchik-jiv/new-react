import axios from "axios";

export const personalContactsApi = {
  fetchContacts() {
    return axios.get("/contacts").then((responce) => responce.data);
  },
  addContact(contact) {
    return axios.post("/contacts", contact).then((responce) => {
      return responce.data;
    });
  },
};
