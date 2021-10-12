import React from 'react';
import styles from './ImageGallery.module.css';

const Images = ({images, onImageClick}) => {

    return (
            <ul className={styles.list}>
                {images&&images.map(image=>{
                    return <li className = {styles.item} key={image.id}>
                        <img className = {styles.image} 
                        src={image.webformatURL} alt="" 
                        onClick={()=>onImageClick(image.largeImageURL)}/>
                    </li>
                })}
                
            </ul>
            )
    
}

export default Images;