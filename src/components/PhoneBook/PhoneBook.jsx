import React from "react";
import styles from "./PhoneBook.module.css";
import ContactsList from "./ContactsList";
import ContactAdditor from "./ContactAdditor";
import Filter from "./Filter";
import Modal from "../common/Modal";
import IconButton from "../common/Buttons/IconButton";
import { ReactComponent as PlusIcon } from "../../Icons/plus.svg";
import { connect } from "react-redux";
import { addContact, changeFilter, deleteContact } from "../../redux/phonebook/phonebook-actions";


class PhoneBook extends React.Component {
  state = {
    showModal: false,
  };
  


  handleFilter =(e)=>{
    this.props.changeFilter(e.target.value)
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    let contactsNames= this.props.contacts.map(contact=>contact.name.toLowerCase());
    return (
      <div className={styles.phonebook}>
        <h1>Phonebook</h1>
        <IconButton onClick={this.toggleModal} aria-label = "Add contact">
          <PlusIcon height="40px" width="40px" style={{ color: "#fff" }} />
        </IconButton>
        {this.state.showModal && (
          <Modal toggleModal={this.toggleModal}>
            <ContactAdditor 
            addContact={this.props.addContact} 
            contactsNames = {contactsNames} 
            toggleModal={this.toggleModal}/>
          </Modal>
        )}
        <Filter changeFilter={this.handleFilter} filter={this.props.filter}/>
        <ContactsList
          contacts={this.props.contacts}
          deleteContact={this.props.deleteContact}
        />
      </div>
    );
  }
}

const mapStateToProps= ({phonebook:{contacts, filter}})=>({
  contacts:contacts.filter(contact=> contact.name.includes(filter)),
  filter,
})

const mapDispatchToProps = (dispatch)=> ({
  addContact: (options)=>dispatch(addContact(options)),
  deleteContact: (id)=>dispatch(deleteContact(id)),
  changeFilter: (value)=>dispatch(changeFilter(value))
})


export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
