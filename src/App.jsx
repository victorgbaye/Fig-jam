
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CategoryElements from './pages/CategoryElements/CategoryElements'
import Login from './pages/Auth/Login/Login'
import Signup from './pages/Auth/Signup/Signup'
import Account from './pages/account/Account'
import Home from './pages/Home/Home'

function App() {

  return (
    <div className='App'>
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
  )
}

export default App
