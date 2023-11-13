import styles from './Navigation.module.scss'
import user from '../../../assets/user.svg'
import logout from '../../../assets/logout.svg'
import Avatar from '../../../assets/Avatar.svg'
import SignupIcon from '../../../assets/SignupIcon.svg'
import LogoutIcon from '../../../assets/LogoutIcon.svg'
import darkToggle from '../../../assets/darkToggle.svg'
import Toggle from '../../../assets/Toggle.svg'
import {useGlobalContext} from '../../../context'
import { useState,useEffect, useRef  } from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  const {theme, toggleTheme} = useGlobalContext()
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [isLoggedIn] = useState(false);

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
            <Link to="/">
              <span style={{color:'#F5F5F5'}}>FIG PLUG</span>
            </Link>
            <div className={styles.userSec} onClick={onToggleDropdown}ref={dropdownRef}>
              <div onClick={toggleTheme} style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'8px'}}>
              <img src={theme == 'light'? Toggle: darkToggle}/>
              <span>{theme == 'light'? 'Light Mode': 'Dark Mode'}</span>
              </div>
              {
                !isLoggedIn ?
                <div className={styles.loginAndSignUp}>
                  <Link to="/signup">
                    <span>
                      <img src={SignupIcon}/>
                      <p style={{color:'#F5F5F5'}}>Sign up</p>
                    </span>
                  </Link>
                  <Link to="/login">
                    <span style={{border:'1px solid #E9BA67', borderRadius:'8px'}}>
                      <img src={LogoutIcon}/>
                      <p style={{color:'#F5F5F5'}}>Log in</p>
                    </span>
                  </Link>
                </div>
                :(
                  <img src={Avatar}/>
                )
              }
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