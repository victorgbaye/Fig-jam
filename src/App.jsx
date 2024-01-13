
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createContext, useEffect, useState } from "react";
import {useGlobalContext} from './context'

export const ThemeContext = createContext(null);

import CategoryElements from './pages/CategoryElements/CategoryElements'
import Login from './pages/Auth/Login/Login'
import Signup from './pages/Auth/Signup/Signup'
import Account from './pages/account/Account'
import Home from './pages/Home/Home'
import MobileComponent from './pages/MobileComponent/MobileComponent';
import Subscription from './pages/Subscription/Subscription';
import AboutUs from './pages/AboutUs/AboutUs';
import TermOfUse from './pages/TermOfUse/TermOfUse';
import Contact from './pages/Contact/Contact';

function App() {
  const {theme, toggleTheme} = useGlobalContext()
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  if (isMobile) {
    return (
      <div>
        <MobileComponent/>
      </div>
    );
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div  className={`App ${theme}`}>
        <Router>
          <Routes>
            <Route/>
            <Route path="/" element={<Home/>} />
            <Route path="/component/:componentName" element={<CategoryElements/>} />
            <Route path="/account" element={<Account/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/subscriptioin" element={<Subscription/>} />
            <Route path="/aboutus" element={ <AboutUs/>} />
            <Route path="/termofuse" element={<TermOfUse/>} />
            <Route path="/contact" element={<Contact/>} />            
            

          </Routes>
        </Router>

      </div>
    </ThemeContext.Provider>

  )
}

export default App
