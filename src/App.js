import React from 'react'
import { useGlobalContext } from './context'
import Meals from './Components/Meals';
import Favorite from './Components/Favorite';
import Modal from './Components/Modal';
import Search from './Components/Search';
import './App.css';

function App() {
  const { showModal, favoriteMeals } = useGlobalContext()
  return (
    <div>
      <header>
        <Search />
        {favoriteMeals.length > 0 && <Favorite favoriteMeal={favoriteMeals} />}
        <Meals />
        {showModal && <Modal />}
      </header>
    </div>
  );
}

export default App;
