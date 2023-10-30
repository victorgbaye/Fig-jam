// import Input from "../../components/UI/input/Input"
import { useState } from "react";

import { AccountInput } from '../../components/UI/input/Input'
import styles from './Account.module.scss'
import trash from '../../assets/trash.svg'
import edit from '../../assets/edit.svg'
import Save from '../../assets/Save.svg'

import { PageBanner } from '../../components/compound/PageBanner/PageBanner'
import Modal from '../../components/compound/modal/Modal'

const Account = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [saveDetailsModalOpen, setSaveDetailsEditModalOpen] = useState(false);
    const [editCardDetailsModalOpen, setEditCardDetailsModalOpen] = useState(false);

    const closeModal = () => {
        setSaveDetailsEditModalOpen(false)
        setEditModalOpen(false);
        setDeleteModalOpen(false)
        setEditCardDetailsModalOpen(false)
        
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
            <AccountInput
            label="Password"
            readOnly={!isEditing}
            />
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
            />
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
                />
            }
            {
                editCardDetailsModalOpen &&
                <Modal
                title="Card details"
                confirmColor="#222"
                closeModal={closeModal}
                prompt="Enter your password to save details."
                buttonLabel="Save details"
                />
            }

        </section>
    </div>
  )
}



export default Account