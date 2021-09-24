import React from 'react';


const ContactsList = ({contacts, deleteContact}) => {

    return(
        <div>
            <h2>Contacts</h2>
            <ul>
                {contacts&&contacts.map(contact=>{
                    return (
                        <li key = {contact.id}>{contact.name}: {contact.number}
                        <button type ="button" onClick = {()=>deleteContact(contact.id)}>Delete</button>
                        </li>
                        
                    )
                })}
            </ul>
            
        </div>
    )
}

export default ContactsList;