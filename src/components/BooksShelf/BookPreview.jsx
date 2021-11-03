import React from 'react';
import styles from "./BooksShelf.module.css";

const BookPreview = ({name, url})=> {
   
    return (
        <div className={styles.bookPreview}>
            <img src={url} alt="" className={styles.imgPreview}/>
            <h3>{name}</h3>
        </div>
    )
}


export default BookPreview;