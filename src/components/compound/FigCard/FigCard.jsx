import { useState } from 'react';
import styles from './FigCard.module.scss'
import PropTypes from 'prop-types';
import  locked from '../../../assets/locked.svg'
import  darkLocked from '../../../assets/darkLocked.svg'
import DesignThumbnail from '../../../assets/DesignThumbnail.svg'
import CategoryThumbnail from '../../../assets/CategoryThumbnail.svg'

import  copy from '../../../assets/copy.svg'
import  darkCopy from '../../../assets/darkCopy.svg'

import Alert from '../Alert/Alert';
import {useGlobalContext} from '../../../context'

export const FigCard = () => {
  const {theme} = useGlobalContext()
  // console.log(theme);

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
  const {theme} = useGlobalContext()
  const [showError, setShowError] = useState(false)
  const handlePremiumError = () =>{
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
        <span onClick={handlePremiumError} style={{backgroundColor: theme == 'dark' ? '#333' : 'white', color: theme == 'dark' ? '#F5F5F5' : '#333'}}>
            {
              paid ?
          <div className={styles.copyToFigma} >
            <img src ={theme =='light' ? copy : darkCopy}/>
            <p style={{color: theme == 'dark' ? '#F5F5F5' : '#333'}}>Copy to Figma</p>
          </div> :
         ( <div className={styles.copyToFigma} >
            <img src ={theme == 'light' ? locked : darkLocked}/>
            <p style={{color: theme == 'dark' ? '#F5F5F5' : '#333'}}>Premium Subscriber</p>
          </div>)
            }
            {
              showError &&
           <Alert type='neutral' message="Your Account currently has no active payement">Update Payment</Alert>
            }
        </span>
      </div>
    </div>
  )
}

FigElementCard.propTypes = {
  title: PropTypes.string,
  paid: PropTypes.bool,
};