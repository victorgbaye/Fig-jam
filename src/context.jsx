import {createContext, useContext, useState, useEffect} from 'react'
import PropTypes from 'prop-types';

const AppContext = createContext()

export const AppProvider = ({children}) =>{
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
      setTheme((curr) => {
        const newTheme = curr === "light" ? "dark" : "light";
        localStorage.setItem('theme', newTheme);
        return newTheme;
      });
    };
    // const greeting = 'hello';

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
          setTheme(storedTheme);
        }
      }, []);
    

    return<AppContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </AppContext.Provider>
}

AppProvider.propTypes = {
    children: PropTypes.node,
  
  }
// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => useContext(AppContext)