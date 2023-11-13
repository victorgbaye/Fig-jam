import {createContext, useContext, useState} from 'react'
import PropTypes from 'prop-types';

const AppContext = createContext()

export const AppProvider = ({children}) =>{
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
      setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };
    // const greeting = 'hello';


    return<AppContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </AppContext.Provider>
}

AppProvider.propTypes = {
    children: PropTypes.node,
  
  }
export const useGlobalContext = () => useContext(AppContext)