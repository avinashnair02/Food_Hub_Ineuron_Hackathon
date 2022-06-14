import React from "react"
import { CartContext } from "../context"

export const useCart = () => {
    const {cart, addToCart, removeFromCart } = React.useContext(CartContext);
    return {cart,addToCart,removeFromCart}
}