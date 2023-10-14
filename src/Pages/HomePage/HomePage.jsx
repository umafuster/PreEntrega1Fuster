import React from 'react';
import "./HomePage.css";
//Component
import ItemListContainer from '../../Components/ItemListContainer/ItemListContainer';


export const HomePage = ({greeting}) => {
  return (
    <div>
      <h1 className='bienvenida'>{greeting}</h1>
    <ItemListContainer />
    </div>
  );
};

export default HomePage;