import Button from "../../../components/UI/button/Button"
import Input from "../../../components/UI/input/Input"
import { useGlobalContext } from "../../../context"
import styles from './Login.module.scss'

const Login = () => {
  const {theme} = useGlobalContext()

  return (
    <div style={{background:theme, height:'100vh'}}>
      <div className={`${styles.LoginContainer} ${styles[theme]}`}>

        <h4>Log in</h4>
        <div className={styles.LoginInputContainer}>
            <Input
            type="email"
            placeholder='Email'
            style={{height:'48px'}}
            />
            <Input
            type="password"
            placeholder="Password"
            style={{height:'48px'}}
            />
        </div>
        <Button
        label="Log in"
        style={{height:'46px'}}
        />
        <p>Dont have an account? <span>Sign Up</span></p>
      </div>

    </div>
  )
}

export default Login