import React from 'react';
import styles from '../PersonalContacts.module.css'

const ContactsList=({contacts})=>{

    return(
        <ul className={styles.noteslist}>
            {contacts.map(contact=>{
                return <li className={styles.item} key={contact.id}>
                    Name: {contact.name} Number: {contact.number}
                </li>
            })}
        </ul>
    )
}

export default ContactsList;