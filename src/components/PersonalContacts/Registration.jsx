import React from "react";
import { connect } from "react-redux";
import { register } from "../../redux/auth/auth-operations";
import styles from "./PersonalContacts.module.css";

class Registration extends React.Component {

  state={
    name:"",
    email:"",
    password:""
  }

  handleChange=(e)=>{
    let {name, value}=e.target;
    this.setState({[name]: value})
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.onRegister(this.state)
    this.setState({name:"", email:"", password:""})
  }

  render (){
    let {name, email, password}=this.state;
    return (
      <div className={styles.registration}>
        <h1 className={styles.title}>Registration Page</h1>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label className={styles.label}>Name
            <input type="text" name="name" className={styles.input} value={name} onChange={this.handleChange}/>
          </label>
          <label className={styles.label}>Email
            <input type="email" name="email" className={styles.input} value={email} onChange={this.handleChange}/>
          </label>
          <label className={styles.label}>Pass
            <input type="password" name="password" className={styles.input} value={password} onChange={this.handleChange}/>
          </label>
          <button type="submit" className={styles.btnForm}>Register</button>
        </form>
      </div>
    );
    }
  
};

const mapDispatchToProps = {
    onRegister: register,
}

export default connect(null, mapDispatchToProps)(Registration);
