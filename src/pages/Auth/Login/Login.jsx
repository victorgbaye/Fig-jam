import { Link, useNavigate } from "react-router-dom"
import Button from "../../../components/UI/button/Button"
import Input, { PasswordInput } from "../../../components/UI/input/Input"
import { useGlobalContext } from "../../../context"
import styles from './Login.module.scss'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../../../features/user/userSlice"
// import bgdesign from '../../../assets/bgdesign.svg'
import bgdesignleft from '../../../assets/bgdesignleft.svg'
import bgdesignleftdark from '../../../assets/bgdesignleftdark.svg'
import LogoutIcon from '../../../assets/LogoutIcon.svg'
import logindark from '../../../assets/logindark.svg'
import Navigation from "../../../components/compound/Navigation/Navigation"

const initialState = {
  email:'',
  password:''
}
const Login = () => {
  const {theme} = useGlobalContext()
  const [loginValues, setLoginValues] = useState(initialState);
  const {user, isLoading} = useSelector(store =>store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setLoginValues({...loginValues, [name]:value})
  }
  const onSubmit = (e) => {
    e.preventDefault()
    const { email, password} = loginValues
    if(!email || !password){
      console.log('please fill all fields');
    }
    dispatch(loginUser({email: email, password: password}))

  }

  useEffect(() => {
    if(user){
      setTimeout(()=>{
        navigate('/')
      }, 2000)
    }

  }, [navigate, user])
  return (
    <div style={{background:theme, height:'90vh'}}>
      <Navigation/>
      <div className={`${styles[theme]}`}>
      <img src={theme === 'dark' ? bgdesignleftdark : bgdesignleft} style={{position: 'fixed', top: '50%', left: 0, transform: 'translateY(-50%)'}}/>
      <div className={`${styles.LoginContainer} ${styles[theme]}`}>

        <h4>Log in</h4>
        <form onSubmit={onSubmit} className={styles.LoginInputContainer}>
            <Input
            label='Email'
            type="email"
            placeholder='Type email here'
            style={{height:'48px'}}
            value={loginValues.email}
            onChange={handleChange}
            name='email'
            />
            <PasswordInput
            label='Password'
            placeholder="Type password here"
            style={{height:'48px'}}
            value={loginValues.password}
            onChange={handleChange}
            name='password'
            />
         <Button
              label={isLoading ? (
                <div style={{display:'flex',alignItems:'center', gap:'8px', justifyContent:'center'}}>
                  <img src={theme === 'dark' ? logindark : LogoutIcon} alt="Log In" /> Logging In...
                </div>
              ) : (
                <div style={{display:'flex',alignItems:'center', gap:'8px', justifyContent:'center'}}>
                  <img src={theme === 'dark' ? logindark : LogoutIcon} alt="Log In" /> Log In
                </div>
              )}
              style={{ height: '40px', background: theme == 'dark' ? '#FFF': isLoading && 'grey' , color: theme == 'dark' ? '#222' : ''}}
              type="submit"
              disabled={isLoading}
              />
        </form>
        <p>Dont have an account? <Link to='/signup'><span>Sign Up</span></Link></p>
      </div>
      <img src={theme === 'dark' ? bgdesignleftdark : bgdesignleft} style={{position: 'fixed', top: '50%', right: 0, transform: 'translateY(-50%) scaleX(-1)' }}/>
      </div>
    </div>
  )
}

export default Login