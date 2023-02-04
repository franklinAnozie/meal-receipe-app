import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

export const context = React.createContext()

const allMealsURL = "https://www.themealdb.com/api/json/v1/1/search.php?s="
const randomMealURL = "https://www.themealdb.com/api/json/v1/1/random.php"
    
export const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(false)
    const [meals, setMeals] = useState([])
    const [showModal, setShowModal] = useState(false)

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
    return (
        <context.Provider value={{loading, meals, allMealsURL, randomMealURL, fetchMeals, showModal}}>
            {children}
        </context.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(context)
}