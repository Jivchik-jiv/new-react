import React, { useState } from 'react';
import styles from './PhoneBook.module.css';


const ContactAdditor =({addContact, toggleModal,contactsNames})=>{
    const [name, setName]=useState("");

    const handleNameChange=(e)=>{
        setName(e.target.value)
    };

    const [number, setNumber]=useState("");

    const handleNumberChange=(e)=>{
        setNumber(e.target.value)
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        let isExists = contactsNames.includes(name.toLowerCase());
        if(!isExists){
            addContact(this.state);
            setName("");
            setNumber("");
            toggleModal();
            return
        }

        alert("This contact already exists!")
        
    };


    return <div className ={styles.additor}>
        <h3>New contact</h3>
        <form onSubmit = {handleSubmit}>
        <label>
            <p>Name</p> 
        <input
             type="text"
             name="name"
             onChange = {handleNameChange}
             value={name}
             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
             required
        />
        </label>
        <label>
            <p>Number</p> 
        <input
            type="tel"
            name="number"
            value={number}
            onChange = {handleNumberChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
        />
        </label>
        <button className ={styles.btn}>Add contact</button>
    </form>
    </div>
}
 
export default ContactAdditor;