import React from "react";
import { connect } from "react-redux";
import { selectIsAuth } from "../../../redux/auth/auth-selectors";
import { addPersonalContact, fetchPersonalContacts } from "../../../redux/personalContacts/personalContacts-operations";
import { selectPersonalContacts } from "../../../redux/personalContacts/personalContacts-selectors";
import styles from "../PersonalContacts.module.css";
import ContactsEditor from "./ContactsEditor";
import ContactsList from './ContactsList';


class Contacts extends React.Component {

  componentDidMount(){
    if(this.props.isAuthenticated){
      this.props.fetchContacts()
    }
    
  }

  render() { 
    let {contacts, addContact}= this.props;
    return (
      <div className={styles.notesWrap}>
        <h1 className={styles.title}>Contacts</h1>
        <ContactsEditor addContact={addContact}/>
        <ContactsList contacts={contacts}/>
      </div>
    );
  }
}
 

const mapStateToProps=(state)=>({
  contacts: selectPersonalContacts(state),
  isAuthenticated: selectIsAuth(state)
})

const mapDispatchToProps=(dispatch)=>({
  fetchContacts: ()=>dispatch(fetchPersonalContacts()),
  addContact: (contact)=>dispatch(addPersonalContact(contact))
})

export default connect(mapStateToProps,mapDispatchToProps)(Contacts);
