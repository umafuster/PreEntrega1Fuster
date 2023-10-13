import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//Components
import CardComponent from '../../Components/CardComponent/CardComponent';
import axios from 'axios';

const DetailPage = () => {
  let {id} = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios('/products.json').then((res) => {
      const product = res.data.find(item => item.id === parseInt(id));
      setItem(product);
    });
  }, [id]);


  return (
    <div>
      {item ? <CardComponent item={item} /> : null}
    </div>
  );
};

export default DetailPage;