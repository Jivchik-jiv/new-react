import React from 'react';
import styles from './ImageGallery.module.css';
import { createPortal } from 'react-dom';


const modalRoot = document.querySelector("#modal-root");

class GalleryModal extends React.Component {

    componentDidMount(){
        window.addEventListener('keydown', this.handleKeydown);
    }


    handleKeydown =(e)=>{
        if(e.code==="Escape"){
            this.props.hideModal()
        }
    }

    handleBackdropClick=(e)=>{
        if(e.target===e.currentTarget){
            this.props.hideModal()
        }
        
    }
    
    render() { 
        return createPortal(<div className = {styles.backdrop} onClick={this.handleBackdropClick}>
                <div className = {styles.content}>
                    <img src={this.props.url} alt="" />
                </div>
        </div>,modalRoot);
    }
}
 
export default GalleryModal;