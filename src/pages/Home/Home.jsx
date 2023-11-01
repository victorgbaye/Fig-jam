import HeroIcon from '../../assets/HeroIcon.svg'
import Search from '../../assets/Search.svg'

import { FigCard } from '../../components/compound/FigCard/FigCard'
import Navigation from '../../components/compound/Navigation/Navigation'
import styles from './Home.module.scss'
const Home = () => {
  return (
    <div >
        <header className={styles.header}>
             <Navigation/>
            <section className={styles.HeroContainer}>
                <p>Copy & Paste <span>UI elements & Graphics</span> to your figma</p>
               <img src={HeroIcon}/>
            </section>
        </header>
        <section className={styles.searchAndFilterContainer}>
          <div className={styles.FilterContainer}>
            <p>UI elements</p>
            <p>Empty graphics</p>
          </div>
          <div  className={styles.SearchContainer}>
          <img src={Search}/>
            <input placeholder='Search'/>
          </div>
        </section>
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