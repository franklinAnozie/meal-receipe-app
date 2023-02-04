import React, { useState } from 'react'
import { useGlobalContext } from '../context'

const Search = () => {
  const [search, setSearch] = useState('')
  const {allMealsURL, randomMealURL, fetchMeals} = useGlobalContext()

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if(search.length > 0) {
      fetchMeals(`${allMealsURL}${search}`)
    } 
  }

  const generateRandom = (e) => {
    (fetchMeals(randomMealURL))
  }

  return (
    <header className='search-container'>
      <form className="search-form">
        <input
          type="text"
          placeholder="Search"
          className='form-input'
          onChange={handleChange}
          value={search}/>
        <button
          type="submit"
          className='btn'
          onClick={handleSearch}>
            Search
        </button>
        <button
          type="button"
          className='btn btn-hipster'
          onClick={generateRandom}>
            Random
        </button>
      </form>
    </header>
  )
}

export default Search
