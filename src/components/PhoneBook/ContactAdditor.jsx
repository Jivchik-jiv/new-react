import React from 'react';
import styles from './PhoneBook.module.css';

class ContactAdditor extends React.Component {

    state = {
        name: "",
        number: ""
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let isExists = this.props.contactsNames.includes(this.state.name.toLowerCase());
        if(!isExists){
            this.props.addContact(this.state);
            this.setState({name:"", number: ""});
            this.props.toggleModal()
            return
        }

        alert("This contact already exists!")
        
    }


    render() { 
        return <div className ={styles.additor}>
        <h3>New contact</h3>
        <form onSubmit = {this.handleSubmit}>
        <label>
            <p>Name</p> 
        <input
             type="text"
             name="name"
             onChange = {this.handleChange}
             value={this.state.name}
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
            value={this.state.number}
            onChange = {this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
        />
        </label>
        <button className ={styles.btn}>Add contact</button>
    </form>
    </div>
    }
}
 
export default ContactAdditor;