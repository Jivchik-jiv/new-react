import React from "react";
import styles from "./PhoneBook.module.css";
import ContactsList from "./ContactsList";
import ContactAdditor from "./ContactAdditor";
import Filter from "./Filter";
import Modal from "../common/Modal";
import IconButton from "../common/Buttons/IconButton";
import { ReactComponent as PlusIcon } from "../../Icons/plus.svg";
import {contactsApi} from '../../api/contacts-api';


class PhoneBook extends React.Component {
  state = {
    contacts: [],
    filter: "",
    showModal: false,
  };

  componentDidMount() {
    contactsApi.fetchContacts()
    .then(contacts=>{
      this.setState({ contacts: contacts.reverse() })
    })
    .catch(error=>{
      console.log(error)
    })
  }

  componentDidUpdate() {
  }

  deleteContact = (contactId) => {
    contactsApi.deleteContact(contactId)
    .then(()=>{
      this.setState((prevState) => {
        return {
          contacts: prevState.contacts.filter(
            (contact) => contact.id !== contactId
          ),
        };
      });
    })
  
  };

  addContact = (name, number) => {
    let options = {name, number}
   
    let isExist = this.state.contacts.find((contact) => contact.name === name);
    if (isExist) {
      alert("There is such name already");
    } else {
      contactsApi.addContact(options).then((newContact)=>{
        this.setState((prevState) => {
          return {
            contacts: [newContact, ...prevState.contacts],
          };
        });
      })
      this.toggleModal();
    }

   
  };

  handleFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    let contacts = this.state.contacts;
    let filteredContacts =
      contacts &&
      contacts.filter((contact) => contact.name.includes(this.state.filter));

    return (
      <div className={styles.phonebook}>
        <h1>Phonebook</h1>
        <IconButton onClick={this.toggleModal} aria-label = "Add contact">
          <PlusIcon height="40px" width="40px" style={{ color: "#fff" }} />
        </IconButton>
        {this.state.showModal && (
          <Modal toggleModal={this.toggleModal}>
            <ContactAdditor addContact={this.addContact} />
          </Modal>
        )}
        <Filter handleFilter={this.handleFilter} filter={this.state.filter} />
        <ContactsList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default PhoneBook;
