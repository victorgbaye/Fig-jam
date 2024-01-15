import  { useState, useEffect } from 'react';
import arrowUp from '../../../assets/arrowUp.svg'
import arrowUpDark from '../../../assets/arrowUpDark.svg'
import styles from './ScrollToTop.module.scss'
import { useGlobalContext } from '../../../context';

const ScrollToTop = () => {
    const {theme} = useGlobalContext()
    const [isVisible, setIsVisible] = useState(false);


    // Show the button when the user scrolls down 100 pixels
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    // Scroll to the top of the page with a smooth animation
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    // Attach the scroll event listener when the component mounts
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <div
    id="scrollToTopButton"
    onClick={scrollToTop}
    style={{ display: isVisible ? 'flex' : 'none' }}
    className={`${styles.ScrollToTop} ${styles[theme]}`}
    >
        <img src={theme == 'dark' ? arrowUpDark : arrowUp}/>
    </div>
  )
}

export default ScrollToTop