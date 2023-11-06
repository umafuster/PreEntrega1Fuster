import React, { useContext } from 'react'
import CartContext from '../../Context/CartContext';

const Cart = () => {
    const { cart } = useContext(CartContext);
    return (
        <div>
            <h1>Cart</h1>
{
    cart.map((product) => {
        <div key={product.id}>
        <h2>{product.name}</h2>
        <p>Unit price: ${product.price}</p>
        <p>Total price: ${product.price * product.quantity}</p>
        <p>Quantity: {product.quantity}</p>
        <br></br>
        </div>
    })
}
        </div>
    )
};

export default Cart;