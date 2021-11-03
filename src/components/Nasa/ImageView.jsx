import React from 'react';
import styles from './Nasa.module.css'

const ImageView =({url, title})=> {

        return <div className={styles.imgView}>
            <h1>{title}</h1>
            <img src={url} alt="" className={styles.img}/>
        </div>;
    
}
 
export default ImageView;