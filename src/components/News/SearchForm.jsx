import React from 'react';
import styles from './News.module.css';

class SearchForm extends React.Component {
    state ={
        query: "",
    }

    handleChange = (e) =>{
        this.setState({query: e.target.value})
    }

    onSubmit = (e) =>{
        e.preventDefault();
            this.props.handleSubmit(this.state.query)  
    }

    render() { 
        return <div>
            <form className ={styles.form} onSubmit = {this.onSubmit}>
                <input type="text" onChange = {this.handleChange} value = {this.state.input} required/>
                <button className = {styles.btn}>Search</button>
            </form>
        </div>;
    }
}
 

export default SearchForm;
