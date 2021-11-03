import React from 'react';
import styles from "./Nasa.module.css";

const ImagePreview = ({title, url})=>{

    return(
        <div className={styles.preview}>
            <h3>{title}</h3>
            <img src={url} alt="" className={styles.previewImg}/>
        </div>
    )
}

export default ImagePreview;