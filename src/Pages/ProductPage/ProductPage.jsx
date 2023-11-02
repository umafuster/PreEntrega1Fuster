import React from 'react';

//Component
import ItemListContainer from '../../Components/ItemListContainer/ItemListContainer';

//CSS
import "./ProductPage.css"

const ProductPage = () => {
    return (
        <div>
            <h1 className='productpage-title'>Products</h1>

            <ItemListContainer />
        </div>
    )
}

export default ProductPage;