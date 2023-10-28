import HeroIcon from '../../assets/HeroIcon.svg'
import { FigCard } from '../../components/compound/FigCard/FigCard'
import styles from './Home.module.scss'
const Home = () => {
  return (
    <div>
        <header>
            <section className={styles.HeroContainer}>
                <p>Copy & Paste <span>UI elements & Graphics</span> to your figma</p>
               <img src={HeroIcon}/>
            </section>
        </header>
        <section className={styles.cardGrid}>
            <FigCard/>
            <FigCard/>
            <FigCard/>
            <FigCard/>
            <FigCard/>
            <FigCard/>
            <FigCard/>
            <FigCard/>
        </section>
    </div>
  )
}

export default Home