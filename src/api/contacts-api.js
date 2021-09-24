import axios from "axios";

export const contactsApi = {
  fetchContacts() {
    return axios
      .get("http://localhost:3001/contacts")
      .then((response) => response.data);
  },

  addContact(contact) {
    return axios
      .post("http://localhost:3001/contacts", contact)
      .then(({ data }) => data);
  },

  deleteContact(id) {
    return axios.delete(`http://localhost:3001/contacts/${id}`);
  },
};
