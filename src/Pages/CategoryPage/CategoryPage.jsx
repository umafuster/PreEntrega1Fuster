import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
//CSS
import "./CategoryPage.css"

//Components
import CardComponent from '../../Components/CardComponent/CardComponent';

// Firestore
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const CategoryPage = () => {
    const [products, setProducts] = useState([]);
    let { categoryId } = useParams();

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

    let filteredProducts = products.filter((product) => {
        return product.category === categoryId;
    });

    return (
        <div>
            <h2 className='category'>{categoryId}</h2>
            <div className='card-component'>
                {filteredProducts.map((product) => {
                    return (
                        <div key={product.id}>
                            <Link to={`/detail/${product.id}`}>
                                <CardComponent product={product} />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default CategoryPage;

