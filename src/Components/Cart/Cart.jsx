import React, { useContext } from 'react'
import {CartContext} from '../../Context/CartContext';
import { Link } from 'react-router-dom';
const Cart = () => {
    const { cart, totalPrice, clearCart } = useContext(CartContext);
    const handleClearCart = () => {
        clearCart();
    }
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
            {
                cart.length > 0 ?
                <div>
                    <h2>Total Price: ${totalPrice}</h2>
                    <button onClick={handleClearCart}>Clear Cart</button>
                    <Link to="/checkout">Checkout</Link>
                </div> :
                <h2>Cart is empty</h2>
            }
    

        </div>
    )
};

export default Cart;