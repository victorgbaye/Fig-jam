// import HeroIcon from '../../assets/HeroIcon.svg'
import Search from '../../assets/Search.svg'
import darkSearch from '../../assets/darkSearch.svg'

import Back from '../../assets/arrow-left-line.svg'
import darkBack from '../../assets/darkBack.svg'
import { FigElementCard } from '../../components/compound/FigCard/FigCard'
// import Navigation from '../../components/compound/Navigation/Navigation'
import { PageBanner } from '../../components/compound/PageBanner/PageBanner'
import { useGlobalContext } from '../../context'
import styles from './CategoryElements.module.scss'
import { Link, useParams } from 'react-router-dom'

// import Footer from '../../components/compound/Footer/Footer'
const CategoryElements = () => {
  const { componentName } = useParams();
  
  const {theme} = useGlobalContext()
  return (
    <div style={{position:'relative'}}>
        <PageBanner
        title={componentName}
        />
        {/* <header>
            <section className={styles.HeroContainer}>
                <p>Copy & Paste <span>UI elements & Graphics</span> to your figma</p>
               <img src={HeroIcon}/>
            </section>
        </header> */}
        
        <section className={`${styles.searchAndFilterContainer} ${styles[theme]}`}>
         
          <div className={styles.Back}>
            <Link to='/'>
              <img src={theme == 'dark' ? darkBack : Back} style={{background: theme == 'dark' ? '#2C2C2C' : '#FFF'}}/>
            </Link>
            <p>Back</p>
          </div>
          <div  className={styles.SearchContainer}>
          <img src={theme =='light' ? Search : darkSearch}/>
            <input placeholder='Search'/>
          </div>
        </section>
        <section className={styles.cardGrid}>
            <FigElementCard
            title='Responsive header'
            paid={true}
            />
            <FigElementCard
            title='Side Navigation 001'
            paid={false}
            />
            <FigElementCard
            title='Responsive header'
            paid={true}
            />
            <FigElementCard
            title='Nav style 001'
            paid={true}
            />
            <FigElementCard
            title='Responsive header'
            paid={false}
            />
            <FigElementCard
            title='Side Navigation 001'
            paid={true}
            />
            <FigElementCard
            title='Responsive header'
            paid={true}
            />
            <FigElementCard
            title='Nav style 001'
            paid={false}
            />
             <FigElementCard
            title='Responsive header'
            paid={false}
            />
        </section>
         {/* <Footer/> */}
    </div>
  )
}

export default CategoryElements