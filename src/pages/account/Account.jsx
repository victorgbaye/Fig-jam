// import Input from "../../components/UI/input/Input"
import { useState } from "react";

import Input, { AccountInput } from '../../components/UI/input/Input'
import styles from './Account.module.scss'
import trash from '../../assets/trash.svg'
import edit from '../../assets/edit.svg'
import darkEdit from '../../assets/darkEdit.svg'
import card from '../../assets/card.svg'
import Save from '../../assets/Save.svg'

import { PageBanner } from '../../components/compound/PageBanner/PageBanner'
import {Modal} from '../../components/compound/modal/Modal'
import Alert from "../../components/compound/Alert/Alert";
import PinForm from "../../components/compound/PinForm/PinForm";
import {useGlobalContext} from '../../context'
import Footer from "../../components/compound/Footer/Footer";
import { useSelector } from "react-redux";
import Button from "../../components/UI/button/Button";
// import { Navigate } from "react-router-dom";
// import { Value } from "sass";


const Account = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [saveDetailsModalOpen, setSaveDetailsEditModalOpen] = useState(false);
    const [editCardDetailsModalOpen, setEditCardDetailsModalOpen] = useState(false);
    const [updatePasswordModalOpen, setUpdatePasswordModalOpen] = useState(false);
    const {user} = useSelector(store =>store.user)

    // const dispatch = useDispatch()
    const [userData, setUserData] = useState({
        firstname: user?.firstname || '',
        lastname: user?.lastname || '',
        email: user?.email || '',
        password: user?.password || '',
        subscription: user?.subscription || '',

    });
    // const [userData, setUserData] = useState({
    //     firstname: 'something',
    //     lastname: 'something',
    //     email: user?.email || '',
    //     password: user?.password || '',
    //     subscription: user?.subscription || '',

    // });
    const {theme} = useGlobalContext()

    const closeModal = () => {
        setSaveDetailsEditModalOpen(false)
        setEditModalOpen(false);
        setDeleteModalOpen(false)
        setEditCardDetailsModalOpen(false)
        setUpdatePasswordModalOpen(false)
        
      };
      const handleEditConfirm =() =>{
        setIsEditing(true)
        setEditModalOpen(false)
      }

      const handleSavedChanges = () =>{
        setIsEditing(!isEditing)
        closeModal()
      }
      const handleSubmit = (e) =>{
        e.preventDefault()
        const {firstname, lastname, email, password, subscription} = userData;
        if(!firstname || !lastname || !email || !password || !subscription){
            console.log('please fill out all ');
        }
        setSaveDetailsEditModalOpen(true)
      }

      const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setUserData({...userData, [name]: value})

      }
    //   if (!user) {
    //     return <Navigate to='/'/>
    // }
  return (
    <div style={{position:'relative'}}>
        <PageBanner
        title='Account'
        />
        <section className={styles.AccountAction}>
    
                {
                isEditing ?
            <div className={styles.editButton} onClick={handleSubmit}>
                <img src={Save}/>
                <p>Save</p>
            </div> 
            :
            (<>
                <div className={styles.editButton} onClick={()=>setEditModalOpen(true)} style={{background:theme == 'light'? '#222' : '#FFF'}}>
                    <img src={theme =='light'? edit : darkEdit}/>
                    <p style={{color:theme == 'dark'? '#222' : '#FFF'}}>Edit</p>
                </div>
                <div className={styles.deleteButton} onClick={()=>setDeleteModalOpen(true)}>
                    <img src={trash}/>
                    <p style={{color:theme == 'light'? '#222' : '#FFF'}}>Delete Account</p>
                </div>
            </>)
            }
            
        </section>
        <main  className={`${styles.AccountDetailsContainer} ${styles[theme]}`}>
            <form className={styles.AccountDetailsFlex}>
                <AccountInput
                type="string"
                label="First Name"
                name='firstname'
                value={userData?.firstname}
                readOnly={!isEditing}
                onChange={handleChange}
                />
                <AccountInput
                type="string"
                label="Last Name"
                name='lastname'
                value={userData.lastname}
                readOnly={!isEditing}
                onChange={handleChange}
                />
            </form>
            <AccountInput
            type="email"
            label="Email"
            name='email'
            value={userData.email}
            readOnly={true}
            onChange={handleChange}
            style={{color:'grey'}}
            />
            <div style={{position:'relative',}}> 
                <AccountInput
                type="password"
                label="Password"
                name='password'
                value={userData.password}
                onChange={handleChange}
                readOnly={true}
                style={{paddingBottom: isEditing && '30px'}}
                placeholder='********'
                />
                {
                    isEditing &&
                <p style={{position:'absolute', bottom:'28px', left:'20px', fontSize:'14px', textDecoration:'underline'}} onClick={()=>setUpdatePasswordModalOpen(true)}>change password</p>
                }
            </div>
             <div className={styles.AccountDetailsFlex}>
                <AccountInput
                label="Subscription"
                readOnly={true}
                name='subscription'
                value={userData.subscription}
                />
            </div>
            <div style={{position:'relative',}}>
                <AccountInput
                label="Card details"
                readOnly={true}
                placeholder='**** **** **** ****'
                style={{paddingBottom: isEditing && '30px'}}
                />
                {
                    isEditing &&
                <Button
                onClick={()=>setEditCardDetailsModalOpen(!editCardDetailsModalOpen)}
                label={<div style={{display:'flex', gap:'12px',}}>
                    <img src={card}/>
                    <p style={{color: theme == 'dark'? '#FFF' : '#222222'}}>Update</p>
                </div>}
                style={{width:'117px', background:'none', color:'#222',border: '1px solid #E9BA67', position:'absolute', bottom:'20px', left:'20px', fontSize:'14px',}}
                
                />
                }
            </div>
        </main>
        <section>
            {
            editModalOpen &&
            <Modal
            title="Edit"
            confirmColor={theme == 'light'? '#333' : '#F5F5F5'}
            closeModal={closeModal}
            prompt="Enter the code sent to your email to edit account."
            buttonLabel="Continue"
            onConfirm={handleEditConfirm}
            >
                <PinForm/>
            </Modal>
            }
            
            {
                deleteModalOpen &&
                <Modal
                title="Delete account"
                confirmColor="#932221"
                closeModal={closeModal}
                prompt="Are you sure you want to delete this account?"
                buttonLabel="Delete"
                deleteColor='#FFF'
                />
            }
            {
                saveDetailsModalOpen &&
                <Modal
                title="Save details"
                confirmColor={theme == 'light'? '#333' : '#F5F5F5'}
                closeModal={closeModal}
                prompt="Enter your password to save details."
                buttonLabel="Continue"
                onConfirm={handleSavedChanges}
                >
                <Input
                placeholder="Password"
                />  
                </Modal>   
            }
            {
                editCardDetailsModalOpen &&
                <Modal
                title="Card details"
                confirmColor={theme == 'light'? '#333' : '#F5F5F5'}
                closeModal={closeModal}
                prompt="Enter your password to save details."
                buttonLabel="Save details"
                >
                <div style={{display:'flex',flexDirection:'column', gap:'20px'}}>

                    <Input
                    placeholder="John Doe"
                    /> 
                    <Input
                    placeholder="1234 5678 9101 1213"
                    /> 
                    <div style={{display:'flex', gap:'20px'}}> 
                    <Input
                    placeholder="10/24"
                    />
                    <Input
                    placeholder="678"
                    /> 
                    </div>
                </div>
                 </Modal>   
            }
                        {
                updatePasswordModalOpen &&
                <Modal
                title="Change Password"
                confirmColor={theme == 'light'? '#333' : '#F5F5F5'}
                closeModal={closeModal}
                // prompt="Enter your password to save details."
                buttonLabel="update"
                >
                <div style={{display:'flex',flexDirection:'column', gap:'20px'}}>

                    <Input
                    placeholder="Old password"
                    /> 
                    <Input
                    placeholder="New password"
                    /> 
                    <Input
                    placeholder="Retype new password"
                    /> 
                </div>
                 </Modal>   
            }
           <Alert type="success" message="Your chnages have been saved successfully"></Alert>
        </section>
        <Footer/>
    </div>
  )
}



export default Account