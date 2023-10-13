import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

// CSS
import "./ItemListContainer.css";

//Componentes
import CardComponent from '../CardComponent/CardComponent';
import { Link } from 'react-router-dom';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('/products.json').then((res) =>
      setItems(res.data)
    );
  }, []);
  return (
    <div >
      <h1 className='bienvenida'>{greeting}</h1>
      <div className='card-component'>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/detail/${item.id}`}>
              <CardComponent item={item} />
            </Link>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default ItemListContainer;