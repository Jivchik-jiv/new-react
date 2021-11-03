import React from 'react';
import styles from "./Nasa.module.css";
import { Link, withRouter } from "react-router-dom";
import routes from '../../routes';
import ImagePreview from './ImagePreview';

const ImagesList = ({images, location})=> {

    return <ul className={styles.previewList}>
    {images.map((image) => {
      return (
        <li key={image.title} className={styles.previewItem}>
          <Link to={{
            pathname:`${routes.nasa.images}/${image.date}`,
            state: location
          
          }} 
            className={styles.link}>
              <ImagePreview title={image.title} url={image.hdurl}/>
              </Link>
        </li>
      );
    })}
  </ul>

}

export default withRouter(ImagesList);