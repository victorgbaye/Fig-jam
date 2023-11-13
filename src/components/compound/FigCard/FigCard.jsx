import { useState } from 'react';
import styles from './FigCard.module.scss'
import PropTypes from 'prop-types';
import  locked from '../../../assets/locked.svg'
import  copy from '../../../assets/copy.svg'
import Alert from '../Alert/Alert';
import {useGlobalContext} from '../../../context'

export const FigCard = () => {
  const {theme} = useGlobalContext()
  // console.log(theme);

  return (
    <div className={`${styles.figCardContainer} ${styles[theme]}`} >
      <div className={styles.componentThumbnail}></div>
      <div className={`${styles.cardDetails} ${styles[theme]}`}>
        <p className={styles.componentName}>Responsive Navigation Bar</p>
        <p className={styles.componentLength}>1 Component</p>
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
    <div className={`${styles.figCardContainer} ${styles[theme]}`} >
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