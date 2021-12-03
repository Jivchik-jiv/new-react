import React from "react";
import { connect } from "react-redux";
import { login } from "../../redux/auth/auth-operations";
import { selectIsAuth } from "../../redux/auth/auth-selectors";
import styles from "./PersonalContacts.module.css";

class Login extends React.Component {

  state={
    email:"",
    password:""
  }

  handleChange=(e)=>{
    let {name, value}=e.target;
    this.setState({[name]: value})
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.onLogin(this.state)
    this.setState({email:"", password:""})
  }

  render () {
    let {email, password} = this.state;
    return (
      <div className={styles.notesWrap}>
        <h1 className={styles.title}>Login Page</h1>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label className={styles.label}>Email
            <input type="email" name="email" className={styles.input} onChange={this.handleChange} value={email}/>
          </label>
          <label className={styles.label}>Pass
            <input type="password" name="password" className={styles.input} onChange={this.handleChange} 
            value={password}/>
          </label>
          <button type="submit" className={styles.btnForm}>Login</button>
        </form>
      </div>
    );
  }
  
};


const mapDispatchToProps=(dispatch)=>({
  onLogin: (data)=>dispatch(login(data))
})

const mapStateToProps =(state)=>({
  isAuthenticated: selectIsAuth(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
