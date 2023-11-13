
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createContext } from "react";
import {useGlobalContext} from './context'

export const ThemeContext = createContext(null);

import CategoryElements from './pages/CategoryElements/CategoryElements'
import Login from './pages/Auth/Login/Login'
import Signup from './pages/Auth/Signup/Signup'
import Account from './pages/account/Account'
import Home from './pages/Home/Home'

function App() {
  const {theme, toggleTheme} = useGlobalContext()


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='App' id={theme}>
        <Router>
          <Routes>
            <Route/>
            <Route path="/" element={<Home/>} />
            <Route path="/category" element={<CategoryElements/>} />
            <Route path="/account" element={<Account/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
          </Routes>
        </Router>
        {/* <Home/> */}
        {/* <Login/> */}
        {/* <Signup/> */}
        {/* <Account/> */}

      </div>
    </ThemeContext.Provider>

  )
}

export default App
