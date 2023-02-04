import React from 'react'
import { useGlobalContext } from '../context'

const Modal = () => {
  const { showModal } = useGlobalContext()
  return (
    <aside className='modal-overlay'>
      <div className='modal-container'>
       <h1>Modal</h1>
      </div>  
    </aside>
  )
}

export default Modal
