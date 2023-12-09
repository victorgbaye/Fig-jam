import styles from './Modal.module.scss'
import X from '../../../assets/X.svg'
import darkX from '../../../assets/darkX.svg'

import Button from '../../UI/button/Button'
import PropTypes from 'prop-types';
// import { useState } from "react";
import {useGlobalContext} from '../../../context'
import { Link } from 'react-router-dom';


export const Modal = ({prompt, title, closeModal, confirmColor, buttonLabel, onConfirm, children}) => {
  const {theme} = useGlobalContext()


  // const handleConfirmClick = () => {
  //   onConfirm();
   
  // };
  return (
    <div className={styles.ModalOverlay}>
        <div className={`${styles.Modal} ${styles[theme]}`}>
            <header className={styles.ModalHeader}>
                <h6>{title}</h6>
                <img src={theme == 'light'? X : darkX} alt="X Icon"  onClick={closeModal}/>
            </header>
            <div className={styles.ModalBody}>
              <p>{prompt}</p>
              
            </div>
            <div className={styles.ModalBody}>
            {children}
            </div>
            {

            <div className={styles.ModalFooter}>
              <Button 
              onClick={onConfirm}
              label={buttonLabel}
              style={{padding:'12px 20px', width:'auto', background: confirmColor, border:'none', outline:'none', color:`${theme =='light' ? '#FFF' : theme =='dark' ? '#1A1A1A' : ''}`}}
              />
              <Button
              label='Cancel'
              style={{padding:'12px 20px', width:'auto', background: 'none', border:'none', outline:'none', color:`${theme =='light' ? '#333' : '#F5F5F5'}`}}
              onClick={closeModal}
              />
            </div>
            }
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
  children: PropTypes.node,

}


export const NotLoggedInModal = ({prompt, title, closeModal, children}) => {
  const {theme} = useGlobalContext()


  // const handleConfirmClick = () => {
  //   onConfirm();
   
  // };
  return (
    <div className={styles.ModalOverlay}>
        <div className={`${styles.Modal} ${styles[theme]}`}>
            <header className={styles.ModalHeader}>
                <h6>{title}</h6>
                <img src={theme == 'light'? X : darkX} alt="X Icon"  onClick={closeModal}/>
            </header>
            <div className={styles.ModalBody}>
              <p>{prompt}</p>
              
            </div>
            <div className={styles.ModalBody}>
            {children}
            </div>
            {

            <div className={styles.NotLoggedModalFooter}>
              <Link to='/login'>
                <Button 
                label='Log in'
                style={{padding:'12px 20px', width:'100%', background: `${theme =='light' ? '#F5F5F5' : theme =='dark' ? '#333' : ''}`, border:'none', outline:'none', color:`${theme =='light' ? '#333' : theme =='dark' ? '#F5F5F5' : ''}`}}
                />
              </Link>
              <Link to='/signup'>
                <Button
                label='Sign Up'
                style={{padding:'12px 20px', width:'100%', background:  `${theme =='light' ? '#333' : theme =='dark' ? '#F5F5F5' : ''}`, border:'none', outline:'none', color:`${theme =='light' ? '#FFF' : '#1A1A1A'}`}}
                onClick={closeModal}
                />
              </Link>
            </div>
            }
        </div>
    </div>
  )
}
NotLoggedInModal.propTypes = {

  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  prompt: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  children: PropTypes.node,

}