import PropTypes from 'prop-types';
import styles from './PageBanner.module.scss'
import Cursor from '../../../assets/Cursor.svg'
import Navigation from '../Navigation/Navigation';
import {useGlobalContext} from '../../../context'

export const PageBanner = ({ title }) => {
  const {theme} = useGlobalContext()

  return (
    <div>
      <Navigation/>
        <header className={`${styles.BannerWrapper} ${styles[theme]}`}>
      <section className={styles.HeroContainer}>
        <p>
          {title}
        </p>
        <img src={Cursor} alt="Hero Icon" />
      </section>
    </header>
    </div>
  )
}

PageBanner.propTypes = {
    title: PropTypes.any,
  };
