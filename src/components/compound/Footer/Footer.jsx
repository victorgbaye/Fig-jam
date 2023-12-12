import styles from './Footer.module.scss'
import X from '../../../assets/X.svg'
import darkX from '../../../assets/darkX.svg'
import darkFooter from '../../../assets/darkFooter.svg'
import footer from '../../../assets/footer.svg'
import {useGlobalContext} from '../../../context'
import { useState } from 'react'

const Footer = () => {
    const {theme} = useGlobalContext()
    const [togleFooter, setToggleFooter] = useState(true)

    const handleToggleFooter = () => {
        setToggleFooter(!togleFooter)
    }
  return (
    <div className={styles.footerWrapper}>
        {
            togleFooter ?
        (<img src={theme == 'dark' ? darkFooter : footer} onClick={handleToggleFooter} className={styles.FooterIcon}/>) :

       ( <div className={` ${styles.footer} ${styles[theme]}` } style={{display: togleFooter && 'none'}}>
            <span>theFigPlug 2023</span>
            <div className={styles.footerPages}>
                <p>Contact</p>
                <p>Terms of service</p>
                <p>About us</p>
            </div>
            <img src={theme == 'dark' ? darkX : X} onClick={handleToggleFooter}/>
        </div>)
        }
    </div>
  )
}

export default Footer