import { useState } from 'react'
import './Modal.css'

export default function DeleteModal({handleDelete,id}){
    const [modalOpen,setModalOpen] = useState(false)

    const handleConfirm = ()=>{
        handleDelete(id)
        setModalOpen(false)
    }
    return(
    <>
            <button className='delete-btn' onClick={()=>setModalOpen(true)}>
         Delete
            </button>
       { modalOpen&&<div  className='delete-container'>

            <div className='modalBackground'>
                <div className='modal-container '>
                    <div className='titleCloseBtn'>
                        <button onClick={()=>setModalOpen(false)}>X</button>
                    </div>
                    <div className='title'>
                        Are suer You want to Delete Employee?
                    </div>
                    <div className='modal-footer'>
                        <button onClick={()=>setModalOpen(false)} id='cancelBtn'>Cancel</button>
                        <button onClick={handleConfirm} >Delete</button>
                    </div>
                </div>
            </div>
        </div>}
        </>
    )
}