import React, { useEffect, useMemo, useState } from "react";
import styles from "./PhoneBook.module.css";
import ContactsList from "./ContactsList";
import ContactAdditor from "./ContactAdditor";
import Filter from "./Filter";
import Modal from "../common/Modal";
import IconButton from "../common/Buttons/IconButton";
import { ReactComponent as PlusIcon } from "../../Icons/plus.svg";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/phonebook/phonebook-actions";
import { selectFilter, selectFilteredContacts } from "../../redux/phonebook/phonebook-selectors";
import { addContact, fetchContacts, deleteContact} from "../../redux/phonebook/phonebook-operations";


const PhoneBook=({contacts,filter,addContact,deleteContact,changeFilter,fetchContacts})=>{

    const [showModal, setShowModal]=useState(false);

    const toggleModal = () => {
    setShowModal(prevShowModal=>!prevShowModal)
    };

    const handleFilter=(e)=>{
      changeFilter(e.target.value)
    }


    useEffect(()=>{
      fetchContacts()
    },[fetchContacts]);

    let contactsNames= useMemo(()=>contacts.map(contact=>contact.name.toLowerCase()), [contacts]);

  return (
    <div className={styles.phonebook}>
      <h1>Phonebook</h1>
      <IconButton onClick={toggleModal} aria-label = "Add contact">
        <PlusIcon height="40px" width="40px" style={{ color: "#fff" }} />
      </IconButton>
      {showModal && (
        <Modal toggleModal={toggleModal}>
          <ContactAdditor 
          addContact={addContact} 
          contactsNames = {contactsNames} 
          toggleModal={toggleModal}/>
        </Modal>
      )}
      <Filter changeFilter={handleFilter} filter={filter}/>
      <ContactsList
        contacts={contacts}
        deleteContact={deleteContact}
      />
    </div>
  );
}

const mapStateToProps= (state)=>({
  contacts: selectFilteredContacts(state),
  filter: selectFilter(state)
})

const mapDispatchToProps = (dispatch)=> ({
  addContact: (options)=>dispatch(addContact(options)),
  deleteContact: (id)=>dispatch(deleteContact(id)),
  changeFilter: (value)=>dispatch(changeFilter(value)),
  fetchContacts: ()=> dispatch(fetchContacts())
})


export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
