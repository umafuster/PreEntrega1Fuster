import React from 'react'
import { createContext, useState } from 'react';

// MUI
import  Alert from "@mui/material/Alert";

export const CartContext = createContext({
    cart: []
});


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addProduct = (product, quantity) => {
        if (!isInCart(product.id)) {
            setCart(prev => [...prev, { ...product, quantity }])
        } else {
            <Alert variant="outlined" severity="warning">
                Product was already added
            </Alert>
        };
    };
    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== productId)
        setCart(cartUpdated);
    };
    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === productId);
    };

    return (
        <CartContext.Provider value={{cart, addProduct, removeProduct, clearCart}}>
            {children}
        </CartContext.Provider>
    )
};




