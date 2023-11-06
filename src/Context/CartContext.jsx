import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const AddToCart = (product, quantity) => {
        const addedProduct = { ...product, quantity };
        const newCart = [...cart];
        const isAdded = newCart.find((product) => product.id === addedProduct.id);


        if (isAdded) {
            isAdded.quantity += quantity;
        } else {
            newCart.push(addedProduct);
        };
        setCart(newCart);
    };

    const quantityInCart = (children) => {
        return cart.reduce((acc, product) => acc + product.quantity, 0);
    };

    const totalPrice = () => {
        return cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, AddToCart, quantityInCart, totalPrice, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}



