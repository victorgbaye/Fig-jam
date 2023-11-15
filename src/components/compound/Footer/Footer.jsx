import styles from './Footer.module.scss'
import X from '../../../assets/X.svg'
import darkX from '../../../assets/darkX.svg'
import {useGlobalContext} from '../../../context'

const Footer = () => {
    const {theme} = useGlobalContext()

  return (
    <div className={` ${styles.footer} ${styles[theme]}`}>
        <span>theFigPlug 2023</span>
        <div className={styles.footerPages}>
            <p>Contact</p>
            <p>Terms of service</p>
            <p>About us</p>
        </div>
        <img src={theme == 'dark' ? darkX : X}/>
    </div>
  )
}

export default Footer