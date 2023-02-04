import React from 'react'
import { useGlobalContext } from './context'
import Meals from './Components/Meals';
import Favorite from './Components/Favorite';
import Modal from './Components/Modal';
import Search from './Components/Search';
import './App.css';

function App() {
  const { showModal } = useGlobalContext()
  return (
    <div>
      <header>
        <Search />
        <Meals />
        <Favorite />
        {showModal && <Modal />}
      </header>
    </div>
  );
}

export default App;
