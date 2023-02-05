import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

export const context = React.createContext()

const allMealsURL = "https://www.themealdb.com/api/json/v1/1/search.php?s="
const randomMealURL = "https://www.themealdb.com/api/json/v1/1/random.php"
    
export const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(false)
    const [meals, setMeals] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [modalInfo, setModalInfo] = useState(null);
    const [favoriteMeals, setFavoriteMeals] = useState(JSON.parse(localStorage.getItem('favoriteMeals')) || [])

    const fetchMeals = async (url) => {
        setLoading(true)
        try {
            const {data} = await axios.get(url)
            if (data.meals) {
                setMeals(data.meals)
            } else {
                setMeals([])
            }
        } catch (error) {
            console.log(error.response)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchMeals(`${allMealsURL}`)
    }, [])

    const toggleModal =(id, fav) => {
        let foundMeal
        if (fav) {
            foundMeal = favoriteMeals.find((meal) => meal.idMeal === id)
        } else {
            foundMeal = meals.find((meal) => meal.idMeal === id)
        }  
        setShowModal(true)
        setModalInfo(foundMeal)
    }

    const setAsFav = (id) => {
        let favMeals = []
        let found =  meals.find((meal) => meal.idMeal === id)
        let isPresent = favoriteMeals.find((meal) => meal.idMeal === id)
        if (!isPresent) {
            favMeals = [...favoriteMeals, found]
        } else {
            favMeals = [...favoriteMeals]
        }
        setFavoriteMeals(favMeals)
        localStorage.setItem('favoriteMeals', JSON.stringify(favMeals))
    }

    const removeFav = (id) => {
        let fav = [];
        fav = favoriteMeals.filter(f => f.idMeal !== id)
        setFavoriteMeals(fav)
        localStorage.setItem('favoriteMeals', JSON.stringify(fav))
    }
    
    return (
        <context.Provider value={
            {
                loading, 
                meals,
                allMealsURL,
                randomMealURL,
                fetchMeals,
                showModal,
                setShowModal,
                toggleModal,
                setModalInfo,
                modalInfo,
                favoriteMeals,
                setFavoriteMeals,
                setAsFav,
                removeFav
            }
        }>
            {children}
        </context.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(context)
}