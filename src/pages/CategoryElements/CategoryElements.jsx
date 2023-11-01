// import HeroIcon from '../../assets/HeroIcon.svg'
import Search from '../../assets/Search.svg'
import Back from '../../assets/arrow-left-line.svg'
import { FigElementCard } from '../../components/compound/FigCard/FigCard'
// import Navigation from '../../components/compound/Navigation/Navigation'
import { PageBanner } from '../../components/compound/PageBanner/PageBanner'
import styles from './CategoryElements.module.scss'
const CategoryElements = () => {
  return (
    <div>
        <PageBanner
        title='Responsive Navigation Bar'
        />
        {/* <header>
            <section className={styles.HeroContainer}>
                <p>Copy & Paste <span>UI elements & Graphics</span> to your figma</p>
               <img src={HeroIcon}/>
            </section>
        </header> */}
        <section className={styles.searchAndFilterContainer}>
          <div className={styles.Back}>
            <img src={Back}/>
            <p>Back</p>
          </div>
          <div  className={styles.SearchContainer}>
          <img src={Search}/>
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
        </section>
    </div>
  )
}

export default CategoryElements