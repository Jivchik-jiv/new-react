import React from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import {ReactComponent as CloseIcon} from '../../../Icons/close.svg'
import IconButton from '../Buttons/IconButton';


const modalRoot = document.querySelector('#modal-root');

class Modal extends React.Component {

    componentDidMount(){
         window.addEventListener('keydown', this.handleKeyDown)
        }

    componentWillUnmount(){
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = e => {
        if(e.code==="Escape"){
            this.props.toggleModal()
        }
    }

    handleBackdropClick = e => {
        if(e.target===e.currentTarget){
            this.props.toggleModal()
        }
    
    }

    render() { 
        return createPortal(
        <div className = {styles.backdrop} onClick = {this.handleBackdropClick}>
            <div className ={styles.content}>
                {this.props.children}
                <div className = {styles.closeBtn}>
                <IconButton style ={{backgroundColor: "red"}}><CloseIcon width = "30px" height = "30px" fill = "#fff" onClick={this.props.toggleModal} /></IconButton>
                </div>
                
                
                </div>
        </div>, modalRoot);
    }
}
 

export default Modal;