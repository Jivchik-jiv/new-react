import React from 'react';
import styles from './IconButton.module.css';

const IconButton = ({children, onClick, ...allyProps})=> (
    <button type = "button" className = {styles.iconBtn} onClick = {onClick} {...allyProps}>
        {children}
    </button>
)

export default IconButton;