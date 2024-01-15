import HeroIcon from '../../assets/HeroIcon.svg'
import Search from '../../assets/Search.svg'
import darkSearch from '../../assets/darkSearch.svg'
import { FigCard } from '../../components/compound/FigCard/FigCard'
import Navigation from '../../components/compound/Navigation/Navigation'
import styles from './Home.module.scss'
import {useGlobalContext} from '../../context'
// import Footer from '../../components/compound/Footer/Footer'
import { FigCardData } from './FigCardData'
import { useState } from 'react'
import Categories from './Categories'
import ScrollToTop from '../../components/compound/ScrollToTop/ScrollToTop'
const Home = () => {
  const {theme} = useGlobalContext()
  const [cardData, setCardData] = useState(FigCardData)
   const allCategories = ['All', ...new Set(cardData.map((data)=>data.category))]
   const [categories] = useState(allCategories)
   const [activeCategory, setActiveCategory] = useState(null);
     const filterItems = (category) =>{
    console.log(category);
    if(category === 'All'){
      setCardData(FigCardData)
      setActiveCategory(category);
      return
    }
    const newItem = FigCardData.filter((item)=> item.category === category)
    setCardData(newItem)
    setActiveCategory(category);
   } 

  return (
    <>
    <div  style={{position:'relative', height:'100%'}}>
    <Navigation/>
        <header className={`${styles.header} ${styles[theme]}`} style={{backgroundColor: theme == 'light'? '' : '#1a1a1a'}}>
            <section className={styles.HeroContainer}>
                <p>Copy & Paste <span>UI elements & Graphics</span> to your figma</p>
               <img src={HeroIcon}/>
            </section>
        </header>
        <section className={`${styles.searchAndFilterContainer} ${styles[theme]}`}>
          <Categories categories={categories} filterItems={filterItems} activeCategory={activeCategory}/>
          <div  className={styles.SearchContainer} >
          <img src={theme =='light' ? Search : darkSearch} />
            <input placeholder='Search'/>
          </div>
        </section>
        <section className={styles.cardGrid}>
            {
              cardData.map((data)=>{
                return(
                  <FigCard key={data.title} 
                  componentName={data.title}
                  componentLength={data.componentLength}
                  componentImage={data.img}
                  />

                )
              })
            }
        </section>
        <div style={{position:'absolute', }}>
          {/* <Footer/> */}
          <ScrollToTop/>
        </div>
    </div>
    </>
  )
}

export default Home