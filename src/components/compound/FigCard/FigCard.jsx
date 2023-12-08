import styles from './Figcard.module.scss'
import { useState } from 'react';
import PropTypes from 'prop-types';
// import  locked from '../../../assets/locked.svg'
// import  darkLocked from '../../../assets/darkLocked.svg'
import DesignThumbnail from '../../../assets/DesignThumbnail.svg'
import CategoryThumbnail from '../../../assets/CategoryThumbnail.svg'
import  copy from '../../../assets/copy.svg'
import  darkCopy from '../../../assets/darkCopy.svg'
import Alert from '../Alert/Alert';
import {useGlobalContext} from '../../../context'
import { useSelector } from 'react-redux';
import Modal from '../modal/Modal';

export const FigCard = () => {
  const {theme} = useGlobalContext()
 

  return (
    <div className={`${styles.figCardContainer} `} style={{backgroundColor: theme == 'dark' ? '#333' : 'white'}}>
      <div className={styles.componentThumbnail}style={{backgroundColor: theme == 'dark' ? '#1A1A1A' : '#F5F5F5'}}>
      <img src={CategoryThumbnail}/>
      </div>
      <div className={`${styles.cardDetails} ${styles[theme]}`}>
        <p className={styles.componentName} style={{color: theme == 'dark' ? '#F5F5F5' : '#333'}}>Responsive Navigation Bar</p>
        <p className={styles.componentLength} style={{color: theme == 'dark' ? '#ccc' : '#666'}}>1 Component</p>
      </div>
    </div>
  )
}

export const FigElementCard = ({title, paid}) => {
  const {user} = useSelector(store =>store.user)
  const [signInModal, setSignInModal] = useState(false);
  const {theme} = useGlobalContext()
  const [showError, setShowError] = useState(false)

  const handleCopyToFigma = () =>{
    if(!user){
      setSignInModal(!signInModal)
    }
    console.log('hello');
    !paid && setShowError(!showError)
   
  }
  return (
    // ${styles[theme]}
    <div className={`${styles.figCardContainer} `} style={{backgroundColor: theme == 'dark' ? '#333' : 'white'}}>
      <div className={styles.componentThumbnail} style={{backgroundColor: theme == 'dark' ? '#1A1A1A' : '#F2F2F2'}}>
      {/* 1A1A1A */}
        <img src={DesignThumbnail}/>
      </div>
      <div className={styles.cardDetails}>
        <p style={{color: theme == 'dark' ? '#F5F5F5' : '#333'}}>{title}</p>
        <span onClick={handleCopyToFigma} style={{backgroundColor: theme == 'dark' ? '#333' : 'white', color: theme == 'dark' ? '#F5F5F5' : '#333'}}>
            {
              // paid ?
          <div className={styles.copyToFigma} onClick={handleCopyToFigma}>
            <img src ={theme =='light' ? copy : darkCopy}/>
            <p style={{color: theme == 'dark' ? '#F5F5F5' : '#333'}}>{paid && user?.subscription == 'paid' ? 'Copy to figma' : paid && user?.subscription == 'free'? 'Premium Subscriber': 'Copy to figma' }</p>
          </div> 
        //  ( <div className={styles.copyToFigma} >
        //     <img src ={theme == 'light' ? locked : darkLocked}/>
        //     <p style={{color: theme == 'dark' ? '#F5F5F5' : '#333'}}>Premium Subscriber</p>
        //   </div>)
            }
            {
              showError &&
           <Alert type='neutral' message="Your Account currently has no active payement">Update Payment</Alert>
            }
        </span>
      </div>
      {
        signInModal &&
          <Modal
          title='Log In or Sign up '
          prompt='Log In or Sign up to access the complete figplug library.'
          >
          </Modal>
      }
    </div>
  )
}

FigElementCard.propTypes = {
  title: PropTypes.string,
  paid: PropTypes.bool,
};