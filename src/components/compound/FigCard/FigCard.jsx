import styles from './Figcard.module.scss'
import { useState } from 'react';
import PropTypes from 'prop-types';
// import  locked from '../../../assets/locked.svg'
// import  darkLocked from '../../../assets/darkLocked.svg'
import DesignThumbnail from '../../../assets/DesignThumbnail.svg'
import CategoryThumbnail from '../../../assets/CategoryThumbnail.svg'
import  copy from '../../../assets/copy.svg'
import  darkCopy from '../../../assets/darkCopy.svg'
import  cardLens from '../../../assets/cardLens.svg'
import  darkCardLens from '../../../assets/darkCardLens.svg'
import  X from '../../../assets/X.svg'
import  darkX from '../../../assets/darkX.svg'


// import Alert from '../Alert/Alert';
import {useGlobalContext} from '../../../context'
import { useSelector } from 'react-redux';
import { NotLoggedInModal, NotPremiumModal } from '../modal/Modal';
import { Link } from 'react-router-dom';
import Button from '../../UI/button/Button';

export const FigCard = ({componentName}) => {
  const {theme} = useGlobalContext()
  


  return (
    <Link to={`/component/${componentName}`}>
      <div className={`${styles.figCardContainer} `} style={{backgroundColor: theme == 'dark' ? '#333' : 'white'}}>
        <div className={styles.componentThumbnail}style={{backgroundColor: theme == 'dark' ? '#1A1A1A' : '#F5F5F5'}}>
        <img src={CategoryThumbnail}/>
        </div>
        <div className={`${styles.cardDetails} ${styles[theme]}`}>
          <p className={styles.componentName} style={{color: theme == 'dark' ? '#F5F5F5' : '#333'}}>{componentName}</p>
          <p className={styles.componentLength} style={{color: theme == 'dark' ? '#ccc' : '#666'}}>1 Component</p>
        </div>
      </div>
    </Link>
  )
}

FigCard.propTypes = {
  componentName: PropTypes.string,
};

export const FigElementCard = ({title, paid}) => {
  const {user} = useSelector(store =>store.user)
  const [signInModal, setSignInModal] = useState(false);
  const {theme} = useGlobalContext()
  const [showError, setShowError] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const handleCopyToFigma = () =>{
    if(!user){
      setSignInModal(!signInModal)
    }
    else if(paid){
      setShowError(true)
      // setTimeout(()=>setShowError(false),3000)
    }
   
  }
  const closeModal = () => {
    // setShowError(false)
    setSignInModal(false)
    console.log('hello');
  }
  return (
    // ${styles[theme]}
    <div className={` ${styles.figCardContainer} ${styles[theme]}`} style={{backgroundColor: theme == 'dark' ? '#333' : 'white'}}>
      <div className={styles.componentThumbnail} style={{backgroundColor: theme == 'dark' ? '#1A1A1A' : '#F2F2F2'}} onClick={()=>setShowPreview(!showPreview)}>
      {/* 1A1A1A */}
        <img src={DesignThumbnail}/>
        <div className={styles.cardLens} >
           <img src={ theme == 'light' ? cardLens : darkCardLens} />
        </div>
       
      </div>
      <div className={styles.cardDetails}>
        <p style={{color: theme == 'dark' ? '#F5F5F5' : '#333', fontWeight:400}}>{title}</p>
        <span  style={{backgroundColor: theme == 'dark' ? '#333' : 'white', color: theme == 'dark' ? '#F5F5F5' : '#333'}} className={styles.CopyWrapper}>
            {
              // paid ?
          <div className={styles.copyToFigma} onClick={handleCopyToFigma}>
            <img src ={theme =='light' ? copy : darkCopy} style={{background:'none'}}/>
            <p style={{color: theme == 'dark' ? '#F5F5F5' : '#333'}}>{paid && user?.subscription == 'premium' ? 'Copy to figma' : paid && user?.subscription == 'free'? 'Premium Subscriber': 'Copy to figma' }</p>
          </div> 
            }

            {
              showError &&
          //  <Alert type='info' message="Your Account currently has no active payement">Update Payment</Alert>
          <div style={{zIndex:1, position:'absolute'}}>

              <NotPremiumModal
              title='Go pro'
              prompt='Access unlimited recources on our platform for $20 monthly only'
              closeModal={()=>setShowError(false)}
              
              />
          </div>
            }
        </span>
      </div>
      {
        signInModal &&
        <div style={{zIndex:1}}>
            <NotLoggedInModal
            title='Log In or Sign up '
            prompt='Log In or Sign up to access the complete figplug library.'
            closeModal={closeModal}
            
            >
            </NotLoggedInModal>
        </div>

      }
      {
        showPreview &&
        <div className={styles.previewOverlay}>
          <div className={styles.previewContainer}>
            <section className={styles.previewHeader}>
              <p>Input style 1</p>
              <img src={theme == 'light' ? X : darkX} onClick={()=>setShowPreview(false)}/>
            </section>
            <section className={styles.PreviewImageContainer}>
              <img src={DesignThumbnail} />
            </section>
            <section>
              <Button
                label={
                  <div style={{display:'flex', gap:'12px', placeItems:'center', justifyContent:'center'}}>
                    <img src={theme =='light' ? copy : darkCopy}/>
                    <p style={{ color: theme == 'dark' ? '#F5F5F5' : '#333'}}>{paid && user?.subscription == 'paid' ? 'Copy to figma' : paid && user?.subscription == 'free'? 'Premium Subscriber': 'Copy to figma' }</p>
                  </div>
              }
                style={{padding:'12px 16px', background: theme == 'dark' ? '#333' : '#FFF', border: '1px solid #E9BA67'}}
              />
            </section>
          </div>
        </div>
      }
    </div>
  )
}

FigElementCard.propTypes = {
  title: PropTypes.string,
  paid: PropTypes.bool,
};