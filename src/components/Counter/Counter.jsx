import React from 'react';
import Clicker from './Clicker';
import styles from './Counter.module.css';


class Counter extends React.Component {

    state = {
        result: 0
    }

    changeResult = (name)=> {
        if(name==='add') {
            this.setState(prevState=>{
             return {result: prevState.result + 1}
            })
        }
        if (name === 'subtract') {
            this.setState(prevState=>{
              return {result: prevState.result - 1}
            })
        }
    }

    

    render() { 
        return (
        
        <div className = {styles.counter}>
            <h1 className = {styles.title}>Counter</h1>
            <p className = {styles.result}>{this.state.result}</p>
            <Clicker handleClick = {this.changeResult}/>

        </div>);
    }
}
 
export default Counter;
