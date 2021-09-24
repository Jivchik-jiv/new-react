import React from 'react';
import styles from './News.module.css';

class SearchForm extends React.Component {
    state ={
        input: ""
    }

    handleChange = (e) =>{
        this.setState({input: e.target.value})
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.onChangeQuery(this.state.input)
    }

    render() { 
        return <div>
            <form className ={styles.form} onSubmit = {this.handleSubmit}>
                <input type="text" onChange = {this.handleChange} value = {this.state.input}/>
                <button className = {styles.btn}>Search</button>
            </form>
        </div>;
    }
}
 
export default SearchForm;
