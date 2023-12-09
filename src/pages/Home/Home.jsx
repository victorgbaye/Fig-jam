import HeroIcon from '../../assets/HeroIcon.svg'
import Search from '../../assets/Search.svg'
import darkSearch from '../../assets/darkSearch.svg'

import { FigCard } from '../../components/compound/FigCard/FigCard'
import Navigation from '../../components/compound/Navigation/Navigation'
import styles from './Home.module.scss'
import {useGlobalContext} from '../../context'
import Footer from '../../components/compound/Footer/Footer'
const Home = () => {
  const {theme} = useGlobalContext()

  return (
    <>
    <div  style={{position:'relative'}}>
    <Navigation/>
        <header className={`${styles.header} ${styles[theme]}`} style={{backgroundColor: theme == 'light'? '' : '#1a1a1a'}}>
            <section className={styles.HeroContainer}>
                <p>Copy & Paste <span>UI elements & Graphics</span> to your figma</p>
               <img src={HeroIcon}/>
            </section>
        </header>
        <section className={`${styles.searchAndFilterContainer} ${styles[theme]}`}>
          <div className={styles.FilterContainer}>
          <p style={{backgroundColor: theme == 'dark'? '#383838' : '#FFF'}}>All</p>
            <p style={{backgroundColor: theme == 'dark'? '#383838' : '#FFF'}}>Foundation</p>
            <p style={{backgroundColor: theme == 'dark'? '#383838' : '#FFF'}}>Components</p>
          </div>
          <div  className={styles.SearchContainer} >
          <img src={theme =='light' ? Search : darkSearch} />
            <input placeholder='Search'/>
          </div>
        </section>
        <section className={styles.cardGrid}>
            <FigCard componentName='Responsive Navigation Bar'/>
            <FigCard componentName='Footer'/>
            <FigCard componentName='Responsive Navigation Bar'/>
            <FigCard componentName='Responsive Navigation Bar'/>
            <FigCard componentName='Responsive Navigation Bar'/>
            <FigCard componentName='Responsive Navigation Bar'/>
            <FigCard componentName='Responsive Navigation Bar'/>
            <FigCard componentName='Responsive Navigation Bar'/>
            <FigCard componentName='Responsive Navigation Bar'/>
            <FigCard componentName='Responsive Navigation Bar'/>
            <FigCard componentName='Responsive Navigation Bar'/>
        </section>
        <div style={{position:'absolute', }}>
          <Footer/>
        </div>
    </div>
    </>
  )
}

export default Home