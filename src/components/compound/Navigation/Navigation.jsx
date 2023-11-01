import styles from './Navigation.module.scss'
import user from '../../../assets/user.svg'
import logout from '../../../assets/logout.svg'
import Avatar from '../../../assets/Avatar.svg'
import { useState,useEffect, useRef  } from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setToggleDropdown(false);
        }
      };
    
      useEffect(() => {
        window.addEventListener('click', handleOutsideClick);
    
        return () => {
          window.removeEventListener('click', handleOutsideClick);
        };
      }, []);


    const onToggleDropdown = () =>{
        setToggleDropdown(!toggleDropdown)
    }
  return (
    <div >
        <nav className={styles.nav} >
            <span>FIG PLUG</span>
            <div className={styles.userSec} onClick={onToggleDropdown}ref={dropdownRef}>
           <img src={Avatar}/>
            {
            toggleDropdown &&
            <div className={styles.navDropdown} >
                <Link to="/account">
                <span >
                    <img src={user}/>
                    <p>Account</p>
                </span>
                </Link>
                <span>
                    <img src={logout}/>
                    <p>Log Out</p>
                </span>
            </div>
            }
            </div>
        </nav>
    </div>
  )
}

export default Navigation