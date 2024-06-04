import { Link, useNavigate } from "react-router-dom"
import Button from "../../../components/UI/button/Button"
import Input from "../../../components/UI/input/Input"
import styles from './Signup.module.scss'
import { useGlobalContext } from "../../../context"
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
// import { store } from "../../../store"
import { registerUser } from "../../../features/user/userSlice"
import SignupIcon from '../../../assets/SignupIcon.svg'
import bgdesign from '../../../assets/bgdesign.svg'
import bgdesignleft from '../../../assets/bgdesignleft.svg'


const initialState = {
  firstname: '',
  lastname:'',
  email:'',
  password:''
}
const Signup = () => {
  // const [isButtonDisabled] = useState(false);
  const {theme} = useGlobalContext()
  const [signupValues, setSignupValues] = useState(initialState);

  const {user, isLoading} = useSelector(store =>store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setSignupValues({...signupValues, [name]:value})
  }
  const onSubmit = (e) => {
    e.preventDefault()
    const {firstname, lastname, email, password} = signupValues
    if(!firstname || !lastname || !email || !password){
      console.log('please fill all fields');
    }
    dispatch(registerUser({firstname: firstname, lastname: lastname, email: email, password: password}))
    

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
      <img src={bgdesignleft} style={{position: 'fixed', top: '50%', left: 0, transform: 'translateY(-50%)'}}/>
      <div className={styles.SignupContainer} >
          <h4>Sign Up</h4>
          <form onSubmit={onSubmit} className={styles.SignupInputContainer}>
              <Input
              label="First name"
              type="string"
              placeholder='First name'
              style={{height:'48px'}}
              value={signupValues.firstname}
              onChange={handleChange}
              name='firstname'
              />
              <Input
              label="Last name"
              type="string"
              placeholder='Type last name here'
              style={{height:'48px'}}
              value={signupValues.lastname}
              onChange={handleChange}
              name='lastname'
              />
              <Input
              label="Email"
              type="email"
              placeholder='Type email here'
              style={{height:'48px'}}
              value={signupValues.email}
              onChange={handleChange}
              name='email'
              />
              <Input
              label="Password"
              type="password"
              placeholder="Type password here"
              style={{height:'48px'}}
              value={signupValues.password}
              onChange={handleChange}
              name='password'
              />
              <Input
              label="Re -enter password"
              type="password"
              placeholder="Type password here"
              style={{height:'48px'}}
              value={signupValues.password}
              onChange={handleChange}
              name='password'
              />
              <Button
              label={isLoading ? (
                <div style={{display:'flex',alignItems:'center', gap:'8px', justifyContent:'center'}}>
                  <img src={SignupIcon} alt="Sign Up" /> Signing up...
                </div>
              ) : (
                <div style={{display:'flex',alignItems:'center', gap:'8px', justifyContent:'center'}}>
                  <img src={SignupIcon} alt="Sign Up" /> Sign Up
                </div>
              )}
              style={{ height: '46px', backgroundColor: isLoading ? 'gray' : '/* Inherit or set desired color */' }}
              type="submit"
              disabled={isLoading}
              />
          </form>
          <p>Already have an account? <Link to='/login'><span>Log in</span></Link></p>

      </div>
      <img src={bgdesign} style={{position:'fixed', top: '50%', right: 0, transform: 'translateY(-50%)'}}/>
    </div>
  )
}

export default Signup