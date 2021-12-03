import React from 'react';
import styles from '../PersonalContacts.module.css';

class ContactsEditor extends React.Component {
    state={
        name:"",
        number:""
    }

    handleChange=(e)=>{
        let {name, value}=e.target;
        this.setState({[name]:value})
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addContact(this.state)
        this.setState({name:"", number:""})
    }

    render() { 
        let {name, number}=this.state;
        return <form className={styles.editorForm} onSubmit={this.handleSubmit}>
                <label><span>Name: </span> 
                    <input type="text" value={name} name="name" onChange={this.handleChange} required/>
                </label>
                <label><span>Number: </span> 
                    <input type="tel" value={number} name="number" onChange={this.handleChange} required/>
                </label>
                <button className={styles.btn}>Add contact</button>
                
        </form>;
    }
}
 
export default ContactsEditor;

// Добавить функционал добавления контактов