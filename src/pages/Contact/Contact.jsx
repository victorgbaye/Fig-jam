import Button from "../../components/UI/button/Button"
import Input, { TextArea } from "../../components/UI/input/Input"
import Footer from "../../components/compound/Footer/Footer"
import { PageBanner } from "../../components/compound/PageBanner/PageBanner"
import styles from './Contact.module.scss'
const Contact = () => {
  return (
    <div>
        <PageBanner
        title='Contact'
        />
        <div className={styles.PageContent}>
            <form className={styles.form}>
                <Input
                label='Email'
                placeholder='e.g johndoe@gmail.com'
                />
                <Input
                label='Full name'
                placeholder='e.g John Doe'
                />
                <TextArea
                label='Description'
                />
                <Button label='Send'></Button>
            </form>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact