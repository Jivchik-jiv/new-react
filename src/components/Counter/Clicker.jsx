import React from 'react';
import styles from './Counter.module.css';

class Clicker extends React.Component {

    handleClick = (e) => {
        this.props.handleClick(e.target.name)
    }

    render() { 
        return (<div className = {styles.clicker}>
            <button 
                type = "button" 
                className = {styles.btn}
                onClick = {this.handleClick}
                name = "add"
                >
                Increase
            </button>
            <button
                type = "button" 
                className = {styles.btn}
                onClick = {this.handleClick}
                name = "subtract"
                >
                Decrease
            </button>
        </div>);
    }
}
 
export default Clicker;