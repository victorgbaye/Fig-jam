// import Input from "../../components/UI/input/Input"
import { AccountInput } from '../../components/UI/input/Input'
import styles from './Account.module.scss'

const Account = () => {
  return (
    <div>
        <main className={styles.AccountDetailsContainer}>
            <AccountInput
            label="First Name"
            />
             <AccountInput
            label="Last Name"
            />
            <AccountInput
            label="Email"
            />
            <AccountInput
            label="Password"
            />
        </main>
    </div>
  )
}



export default Account