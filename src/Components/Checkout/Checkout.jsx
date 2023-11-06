import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const Checkout = () => {
    const { cart, totalPrice, clearCart} = useContext(CartContext);
  return (
    <div>Checkout</div>
  )
}

export default Checkout
