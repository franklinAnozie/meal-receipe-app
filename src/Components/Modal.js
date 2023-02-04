import React from 'react'
import { useGlobalContext } from '../context'

const Modal = () => {
  const { setShowModal, modalInfo } = useGlobalContext()
  const {strMealThumb: image, strMeal: title, strInstructions: text, strString: source} = modalInfo
  return (
    <aside className='modal-overlay'>
      <div className='modal-container'>
        <img src={image} alt={title} className='img modal-img'/>
        <div className='modal-content'>
          <h3>{title}</h3>
          <p>Cooking Instructions:</p>
          <p>{text}</p>
          <a href={source} target='_blank' className='modal-link' rel="noreferrer">Original Source</a>
        </div>
       <button
        className='btn btn-hipster close-btn'
        onClick={() => setShowModal(false)}>Close</button>
      </div>  
    </aside>
  )
}

export default Modal
