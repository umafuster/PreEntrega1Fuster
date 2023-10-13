import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


//Components
import CardComponent from '../../Components/CardComponent/CardComponent';

const CategoryPage = () => {
    const [items, setItems] = useState([]);
    let {categoryId} = useParams();

useEffect(() => {
    axios.get('/products.json').then((res) => {
        setItems(res.data);
    });
}, []);

let filteredItems = items.filter((item) => {
    return item.category === categoryId;
});

  return (
    <div className='card-component'>
        {filteredItems.map((item) => {
            return (
                <div key={item.id}>
                    <CardComponent item={item} />
                </div>    
            )
        })}

    </div>
  );
};

export default CategoryPage;