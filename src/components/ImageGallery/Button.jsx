import React from 'react';
import styles from './ImageGallery.module.css';

const Button = ({handleClick}) => {

    return (
        <>
            <button type="button" onClick={handleClick} className={styles.btn}>Load more</button>
        </>
    )
}

export default Button;