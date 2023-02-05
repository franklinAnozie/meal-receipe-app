import React from 'react'
import { useGlobalContext } from '../context'

const Favorite = () => {
  const { favoriteMeals, removeFav, toggleModal } = useGlobalContext()
  return (
    <section className='favorites'>
      <div className='favorites-content'>
        <h5>Favorites</h5>
        <div className='favorites-container'>
          {favoriteMeals.map((fav) => {
            const { idMeal: id, strMealThumb: img, strMeal: name} = fav
            return (
              <div
                key={id}
                className="favorite-item">
                <img
                  src={img}
                  alt={name}
                  className="favorites-img img"
                  onClick={()=> toggleModal(id, true)}/>
                <button className="remove-btn" onClick={() => removeFav(id)}>remove</button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Favorite
