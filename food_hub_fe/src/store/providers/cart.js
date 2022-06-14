import { CartContext } from "../context";
import React from "react";
import { STORE_KEYS } from "../../config";

const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);

  const addToCart = (item) => {
    try{
    const existingIndex = cart?.findIndex(i => i.id === item.id);
    let nextItems = cart
    if(existingIndex >= 0){
       cart[existingIndex] = {
        ...cart[existingIndex] ,
       count: cart[existingIndex].count + 1
      }
      nextItems = [...cart]
    }else{
      nextItems = [...cart, item];
    }
    
    setCart(nextItems);
    localStorage.setItem(STORE_KEYS.CART, JSON.stringify(nextItems));
  }catch(err){
    console.log('CLEAR STOARE ',err.message)
    localStorage.setItem(STORE_KEYS.CART, JSON.stringify([]));
    setCart([])
  }
  };

  const removeFromCart = (id) => {
    const nextItems = cart.filter((item) => item.id !== id);
    setCart(nextItems);
    localStorage.setItem(STORE_KEYS.CART, JSON.stringify(nextItems));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
