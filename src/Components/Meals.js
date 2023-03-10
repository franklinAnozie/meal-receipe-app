import React from 'react'
import { BsHandThumbsUp as Like, BsHandThumbsDown as Dislike } from 'react-icons/bs'
import { useGlobalContext } from '../context'

const Meals = () => {
  const {loading, meals, setAsFav, removeFav, toggleModal} = useGlobalContext()

  if (loading) {
    return (
      <section className="section">
        <h3>Loading!!!</h3>
      </section>
    )
  }
  if (meals.length < 1) {
    return (
      <section className="section">
        <h3>No meal matched your search. Please Try Again!!!</h3>
      </section>
    )
  }
  return (
    <section className="section-center">
        {meals.map(meal => {
          const {idMeal: id, strMeal: name, strMealThumb: image} = meal
          return (
            <article
              key={id}
              id={id}
              className="single-meal"
              >
                <img
                  src={image}
                  alt={name}
                  className='img'
                  onClick={()=> toggleModal(id)}
                />
                <footer>
                  <h5>{name}</h5>
                  <button className='like-btn' onClick={()=>setAsFav(id)}><Like /></button>
                  <button className='like-btn' onClick={()=>removeFav(id)}><Dislike /></button>
                </footer>
            </article> 
          )
        }
        )}
    </section>
  )
}

export default Meals