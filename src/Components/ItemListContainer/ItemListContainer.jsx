import React from 'react';
import { useState, useEffect } from 'react';

// CSS
import "./ItemListContainer.css";

//Componentes
import CardComponent from '../CardComponent/CardComponent';
import { Link } from 'react-router-dom';

// Firestore
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "products"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProducts(docs);
    };
    getProducts();
  }, []);

  return (
    <div >
      <div className='card-component'>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link to={`/detail/${product.id}`}>
              <CardComponent product={product} />
            </Link>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default ItemListContainer;