import React, { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const CartComponent = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No products in the shopping cart</h1>
                <Link to='/products'>Products</Link>
            </div>
        );

    };

    return (
        <div>
            {cart.map(p => <CartProduct key={p.id} {...p} />)}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()}>Remove Products</button>
            <Link to='/shop'>Checkout</Link>
        </div>
    );

};

export default CartComponent;