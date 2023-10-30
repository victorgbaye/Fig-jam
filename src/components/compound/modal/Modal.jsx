import styles from './Modal.module.scss'
import X from '../../../assets/X.svg'
import Button from '../../UI/button/Button'
import PropTypes from 'prop-types';
// import { useState } from "react";

const Modal = ({prompt, title, closeModal, confirmColor, buttonLabel, onConfirm}) => {

  // const handleConfirmClick = () => {
  //   onConfirm();
   
  // };
  return (
    <div className={styles.ModalOverlay}>
        <div className={styles.Modal}>
            <header className={styles.ModalHeader}>
                <h6>{title}</h6>
                <img src={X} alt="X Icon"  onClick={closeModal}/>
            </header>
            <div className={styles.ModalBody}>
              <p>{prompt}</p>
            </div>
            <div className={styles.ModalFooter}>
              <Button 
              onClick={onConfirm}
              label={buttonLabel}
              style={{padding:'12px 20px', width:'auto', background: confirmColor, border:'none', outline:'none'}}
              />
              <Button
              label='Cancel'
              style={{padding:'12px 20px', width:'auto', background: 'none', color:"black", border:'none', outline:'none'}}
              onClick={closeModal}
              />
            </div>
        </div>
    </div>
  )
}
Modal.propTypes = {

  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  prompt: PropTypes.string.isRequired,
  confirmColor: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  onConfirm: PropTypes.func,

}

export default Modal