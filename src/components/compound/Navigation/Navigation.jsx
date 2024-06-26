import styles from './Navigation.module.scss';
import userImage from '../../../assets/user.svg';
import logout from '../../../assets/logout.svg';
import Avatar from '../../../assets/Avatar.svg';
import SignupIcon from '../../../assets/SignupIcon.svg';
import LogoutIcon from '../../../assets/LogoutIcon.svg';
import darkToggle from '../../../assets/darkToggle.svg';
import star from '../../../assets/star.svg';
import Toggle from '../../../assets/Toggle.svg';
import { useGlobalContext } from '../../../context';
import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../features/user/userSlice';
import Alert from '../Alert/Alert';
import Button from '../../UI/button/Button';

const Navigation = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useGlobalContext();
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [isLogoutSucessful, setIsLogoutSucessful] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isLoginPage = location.pathname === '/login';
  const isSignupPage = location.pathname === '/signup';
  const getTextColor = isHomePage ? '#F5F5F5' : '#FFF';
  const dropdownRef = useRef(null);
  const { user } = useSelector(store => store.user);
  const dispatch = useDispatch();

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

  const onToggleDropdown = () => {
    setToggleDropdown(!toggleDropdown);
  };

  const handleLogout = () => {
    setToggleDropdown(false);
    dispatch(logoutUser());
    setIsLogoutSucessful(true);
    navigate('/');
  };

  return (
    <div>
      <nav className={`${styles.nav} ${styles[theme]}`}>
        <div className={styles.navBreadCrumb}>
          <Link to="/">
            <span style={{ color: isHomePage ? '#F5F5F5' : !isHomePage ? '#CCC' : '' }}>FIG PLUG </span>
          </Link>
          {(!isHomePage && !isLoginPage && !isSignupPage) && (
            <p style={{ color: getTextColor }}>
              / {location.pathname.slice(1).charAt(0).toUpperCase() + location.pathname.slice(2).replace(/%20/g, '-')}
            </p>
          )}
        </div>
        <div className={styles.userSec}>
          {
            (user?.subscription === 'free') &&
          <Button
            style={{
              background: 'linear-gradient(87deg, #E9BA67 -19.59%, #ED9C7D 25.16%, #E68DA9 70.78%, #DA8EB4 122.74%)',
              maxWidth: '220px',
              padding: '12px 20px',
              whiteSpace: 'nowrap', // Prevent text from wrapping
            }}
            label={
              <p style={{ display: 'flex', alignItems: 'center', gap: '12px', whiteSpace: 'nowrap' }}> {/* Prevent text from wrapping */}
                <img src={star} alt="star" />
                Subscribe to premium
              </p>
            }
          />
          }
          <div onClick={toggleTheme} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width:'100%', cursor:'pointer' }}>
            <img src={theme === 'light' ? Toggle : darkToggle} />
            {/* <p>{theme === 'light' ? 'Dark mode': 'Light mode'}</p> */}
          </div>
          {!user ? (
            !isLoginPage && !isSignupPage && (
              <div className={styles.loginAndSignUp}>
                <Link to="/signup">
                  <span>
                    <img src={SignupIcon} />
                    <p style={{ color: '#F5F5F5', whiteSpace: 'nowrap' }}>Sign up</p>
                  </span>
                </Link>
                <Link to="/login">
                  <span style={{ border: '1px solid #E9BA67', borderRadius: '8px' }}>
                    <img src={LogoutIcon} />
                    <p style={{ color: '#F5F5F5', whiteSpace: 'nowrap' }}>Log in</p>
                  </span>
                </Link>
              </div>
            )
          ) : (
            <img src={Avatar} onClick={onToggleDropdown} ref={dropdownRef} style={{cursor:'pointer'}}/>
          )}
          {toggleDropdown && (
            <div className={`${styles.navDropdown}`}>
              <Link to="/account">
                <span>
                  <img src={userImage} />
                  <p>Account</p>
                </span>
              </Link>
              <span onClick={handleLogout}>
                <img src={logout} />
                <p>Log Out</p>
              </span>
            </div>
          )}
        </div>
      </nav>
      {isLogoutSucessful && <Alert type='success' message='logout successful' />}
    </div>
  );
};

export default Navigation;
