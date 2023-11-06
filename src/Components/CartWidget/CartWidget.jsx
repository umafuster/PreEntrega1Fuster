import React, { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from '../../Context/CartContext';




const CartWidget = () => {
    const { quantityInCart } = useContext(CartContext);
    return (
        <div>
            <ShoppingCartIcon />
            <span>{quantityInCart()}</span>
        </div>
    );
};

export default CartWidget;