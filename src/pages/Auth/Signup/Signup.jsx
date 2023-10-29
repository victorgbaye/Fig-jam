import Button from "../../../components/UI/button/Button"
import Input from "../../../components/UI/input/Input"
import styles from './Signup.module.scss'

const Signup = () => {
  return (
    <div className={styles.SignupContainer}>
        <h4>Sign Up</h4>
        <div className={styles.SignupInputContainer}>
            <Input
            type="string"
            placeholder='First name'
            style={{height:'48px'}}
            />
            <Input
            type="string"
            placeholder='Last name'
            style={{height:'48px'}}
            />
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
        label="Sign Up"
        style={{height:'46px'}}
        />
        <p>Already have an account? <span>Log in</span></p>

    </div>
  )
}

export default Signup