import { Link, useNavigate } from "react-router-dom"
import Button from "../../../components/UI/button/Button"
import Input from "../../../components/UI/input/Input"
import { useGlobalContext } from "../../../context"
import styles from './Login.module.scss'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../../../features/user/userSlice"

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
    console.log(`${name}: ${value}`)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    const { email, password} = loginValues
    if(!email || !password){
      console.log('please fill all fields');
    }
    dispatch(loginUser({email: email, password: password}))
    console.log(e.target)
    console.log(e.target)
  }

  useEffect(() => {
    if(user){
      setTimeout(()=>{
        navigate('/')
      }, 2000)
    }

  }, [navigate, user])
  return (
    <div style={{background:theme, height:'100vh'}}>
      <div className={`${styles.LoginContainer} ${styles[theme]}`}>

        <h4>Log in</h4>
        <form onSubmit={onSubmit} className={styles.LoginInputContainer}>
            <Input
            type="email"
            placeholder='Email'
            style={{height:'48px'}}
            value={loginValues.email}
            onChange={handleChange}
            name='email'
            />
            <Input
            type="password"
            placeholder="Password"
            style={{height:'48px'}}
            value={loginValues.password}
            onChange={handleChange}
            name='password'
            />
        <Button
        label={isLoading ? 'Logging in...' : 'log in'}
        style={{height:'46px', background: theme == 'dark' ? '#FFF': isLoading && 'grey' , color: theme == 'dark' ? '#222' : ''}}
        type='submit'
        disabled={isLoading}
        />
        </form>
        <p>Dont have an account? <Link to='/signup'><span>Sign Up</span></Link></p>
      </div>

    </div>
  )
}

export default Login