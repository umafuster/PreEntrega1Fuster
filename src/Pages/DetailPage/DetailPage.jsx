import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//Components
import DetailComponent from '../../Components/DetailComponent/DetailComponent';

// Firestore
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs, documentId } from "firebase/firestore";


const DetailPage = () => {
  const [productData, setProductData] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "products"), where(documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductData(docs);
    };
    getProducts();
  }, [id]);

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
      {productData.map((product) => {
        return <DetailComponent product={product} key={product.id} />;
      })}
    </div>
  );
};

export default DetailPage;