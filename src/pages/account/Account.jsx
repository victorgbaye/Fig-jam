// import Input from "../../components/UI/input/Input"
import { useState } from "react";

import Input, { AccountInput } from '../../components/UI/input/Input'
import styles from './Account.module.scss'
import trash from '../../assets/trash.svg'
import edit from '../../assets/edit.svg'
import Save from '../../assets/Save.svg'

import { PageBanner } from '../../components/compound/PageBanner/PageBanner'
import Modal from '../../components/compound/modal/Modal'
import Alert from "../../components/compound/Alert/Alert";
import PinForm from "../../components/compound/PinForm/PinForm";

const Account = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [saveDetailsModalOpen, setSaveDetailsEditModalOpen] = useState(false);
    const [editCardDetailsModalOpen, setEditCardDetailsModalOpen] = useState(false);
    const [updatePasswordModalOpen, setUpdatePasswordModalOpen] = useState(false);


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
  return (
    <div>
        <PageBanner
        title='Account'
        />
        <section className={styles.AccountAction}>
    
                {
                isEditing ?
            <div className={styles.editButton} onClick={()=>setSaveDetailsEditModalOpen(true)}>
                <img src={Save}/>
                <p>Save</p>
            </div> 
            :
            (<>
                <div className={styles.editButton} onClick={()=>setEditModalOpen(true)}>
                    <img src={edit}/>
                    <p>Edit</p>
                </div>
                <div className={styles.deleteButton} onClick={()=>setDeleteModalOpen(true)}>
                    <img src={trash}/>
                    <p>Delete Account</p>
                </div>
            </>)
            }
            
        </section>
        <main className={styles.AccountDetailsContainer}>
            <div className={styles.AccountDetailsFlex}>
                <AccountInput
                label="First Name"
                readOnly={!isEditing}
                />
                <AccountInput
                label="Last Name"
                readOnly={!isEditing}
                />
            </div>
            <AccountInput
            label="Email"
            readOnly={!isEditing}
            />
            <div style={{position:'relative',}}> 
                <AccountInput
                type="password"
                label="Password"
                readOnly={!isEditing}
                style={{paddingBottom: isEditing && '30px'}}
                />
                {
                    isEditing &&
                <p style={{position:'absolute', bottom:'28px', left:'20px', fontSize:'14px', textDecoration:'underline'}} onClick={()=>setUpdatePasswordModalOpen(true)}>change password</p>
                }
            </div>
             <div className={styles.AccountDetailsFlex}>
                <AccountInput
                label="Subscription"
                readOnly={!isEditing}
                />
                <AccountInput
                label="Status"
                readOnly={!isEditing}
                />
            </div>
            <AccountInput
            label="Card details"
            readOnly={!isEditing}
            />
        </main>
        <section>
            {
            editModalOpen &&
            <Modal
            title="Edit"
            confirmColor="#222"
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
                />
            }
            {
                saveDetailsModalOpen &&
                <Modal
                title="Save details"
                confirmColor="#222"
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
                confirmColor="#222"
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
                confirmColor="#222"
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
    </div>
  )
}



export default Account