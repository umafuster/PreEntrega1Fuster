import React, { useContext } from 'react'
import CartContext from '../../Context/CartContext';

const Cart = () => {
    const { cart, totalPrice } = useContext(CartContext);
    return (
        <div>
            <h1>Cart</h1>
            {
                cart.map((product) => (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Unit price: ${product.price}</p>
                        <p>Total price: ${product.price * product.quantity}</p>
                        <p>Quantity: {product.quantity}</p>
                        <br />
                    </div>
                ))
            }
            <h2>Total Price: ${totalPrice}</h2>
        </div>
    )
};

export default Cart;