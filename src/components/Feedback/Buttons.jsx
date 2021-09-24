import React from 'react';
import styles from './Feedback.module.css';


const Buttons = ({buttons, handleClick}) => {

    return (
        <div className = {styles.btnBlock}>
                {buttons.map(item=> {
                    return <button 
                    type = "button" 
                    className = {styles.btn}
                    key = {item}
                    onClick = {()=>handleClick(item)}
                    >{item}</button>
                })
                }
            </div>
    )
}

export default Buttons;