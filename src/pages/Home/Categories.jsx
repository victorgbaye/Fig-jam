import styles from './Home.module.scss'
import {useGlobalContext} from '../../context'
import PropTypes from 'prop-types';

const CategoriesComponent = ({categories, filterItems, activeCategory}) => {
    const {theme} = useGlobalContext()

  return (
    <div className={styles.FilterContainer}>
        {
            categories.map((category)=>{
                return(
                    <p key={category} style={{backgroundColor: (activeCategory === category || (category === 'All' && activeCategory === null)) ? (theme === 'dark' ? '#383838' : '#FFF') : 'transparent' }} onClick={()=>filterItems(category)}>{category}</p>
                )
            })
        }
    </div>
  )
}
CategoriesComponent.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    filterItems: PropTypes.string,
    activeCategory: PropTypes.string
  };
  
export default CategoriesComponent