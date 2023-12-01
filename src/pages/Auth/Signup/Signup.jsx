import { Link } from "react-router-dom"
import Button from "../../../components/UI/button/Button"
import Input from "../../../components/UI/input/Input"
import styles from './Signup.module.scss'
import { useGlobalContext } from "../../../context"
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
// import { store } from "../../../store"
import { registerUser } from "../../../features/user/userSlice"

const initialState = {
  firstname: '',
  lastname:'',
  email:'',
  password:''
}
const Signup = () => {
  const {theme} = useGlobalContext()
  const [signupValues, setSignupValues] = useState(initialState);

  const {user, isLoading} = useSelector(store =>store.user)
  const dispatch = useDispatch()
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setSignupValues({...signupValues, [name]:value})
    console.log(`${name}: ${value}`)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    const {firstname, lastname, email, password} = signupValues
    if(!firstname || !lastname || !email || !password){
      console.log('please fill all fields');
    }
    dispatch(registerUser({firstname: firstname, lastname: lastname, email: email, password: password}))
    console.log(e.target)
  }

  return (
    <div style={{background:theme, height:'100vh'}}>

      <div className={styles.SignupContainer} >
          <h4>Sign Up</h4>
          <form onSubmit={onSubmit} className={styles.SignupInputContainer}>
              <Input
              type="string"
              placeholder='First name'
              style={{height:'48px'}}
              value={signupValues.firstname}
              onChange={handleChange}
              name='firstname'
              />
              <Input
              type="string"
              placeholder='Last name'
              style={{height:'48px'}}
              value={signupValues.lastname}
              onChange={handleChange}
              name='lastname'
              />
              <Input
              type="email"
              placeholder='Email'
              style={{height:'48px'}}
              value={signupValues.email}
              onChange={handleChange}
              name='email'
              />
              <Input
              type="password"
              placeholder="Password"
              style={{height:'48px'}}
              value={signupValues.password}
              onChange={handleChange}
              name='password'
              />
          <Button
          label="Sign Up"
          style={{height:'46px'}}
          type='submit'
          
          />
          </form>
          <p>Already have an account? <Link to='/login'><span>Log in</span></Link></p>

      </div>
    </div>
  )
}

export default Signup