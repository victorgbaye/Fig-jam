import PropTypes from 'prop-types';
import styles from './PageBanner.module.scss'
import Cursor from '../../../assets/Cursor.svg'
import Navigation from '../Navigation/Navigation';
export const PageBanner = ({ title }) => {
  return (
    <div>
        <header className={styles.BannerWrapper}>
        <Navigation/>
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
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    heroIcon: PropTypes.string.isRequired, // Assuming heroIcon is a URL to the image
  };
