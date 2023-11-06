import { useState } from 'react';
import styles from './FigCard.module.scss'
import PropTypes from 'prop-types';
import  locked from '../../../assets/locked.svg'
import  copy from '../../../assets/copy.svg'
import Alert from '../Alert/Alert';

export const FigCard = () => {
  
  return (
    <div className={styles.figCardContainer}>
      <div className={styles.componentThumbnail}></div>
      <div className={styles.cardDetails}>
        <p>Responsive Navigation Bar</p>
        <p>1 Component</p>
      </div>
    </div>
  )
}

export const FigElementCard = ({title, paid}) => {
  const [showError, setShowError] = useState(false)
  const handlePremiumError = () =>{
    !paid && setShowError(!showError)
  }
  return (
    <div className={styles.figCardContainer}>
      <div className={styles.componentThumbnail}></div>
      <div className={styles.cardDetails}>
        <p>{title}</p>
        <span onClick={handlePremiumError}>
            {
              paid ?
          <div className={styles.copyToFigma}>
            <img src ={copy}/>
            <p>Copy to Figma</p>
          </div> :
         ( <div className={styles.copyToFigma} >
            <img src ={locked}/>
            <p>Premium Subscriber</p>
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