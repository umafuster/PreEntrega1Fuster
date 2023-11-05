import React, { useState } from 'react';

const ProductCount = ({quantity, handleAdd, handleRest}) => {
   
    return (
        <div>

            <div className="item-count">
                <button onClick={handleRest}>-</button>
                <p>{quantity}</p>
                <button onClick={handleAdd}>+</button>
            </div>
            <button className='add-cart'>Add to Cart</button>
        </div>
    )
}

export default ProductCount;