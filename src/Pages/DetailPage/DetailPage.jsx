import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//Components
import CardComponent from '../../Components/CardComponent/CardComponent';
import axios from 'axios';

// Firestore
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";


const DetailPage = () => {
  let { id } = useParams();
  const [product, setProduct] = useState([]);

  /*   useEffect(() => {
      axios('/products.json').then((res) => {
        const product = res.data.find(item => item.id === parseInt(id));
        setItem(product);
      });
    }, [id]); */

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "products"), where("category", "==", product.category));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProduct(docs);
    };
    getProducts();
  }, [id]);

  //const q = query(collection(db, "cities"), where("category", "==", product.category));


  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
      {product.id ? <CardComponent product={product} /> : null}
    </div>
  );
};

export default DetailPage;