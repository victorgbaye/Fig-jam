import HeroIcon from '../../assets/HeroIcon.svg'
import styles from './MobileComponent.module.scss'

const MobileComponent = () => {
  return (
    <header className={`${styles.header}`}  >
        <section className={styles.HeroContainer}>
            <p>I am not built for <span>Mobile</span></p>
            <img src={HeroIcon}/>
        </section>
    </header>
  )
}

export default MobileComponent