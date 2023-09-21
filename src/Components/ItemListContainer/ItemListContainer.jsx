import React from 'react';
import "./ItemListContainer.css";

export const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <h1 className='bienvenida'>{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;