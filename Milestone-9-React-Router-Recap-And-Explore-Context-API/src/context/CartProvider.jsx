import React, { createContext, useState } from 'react';
import { addToDb } from '../utils/fakeDB';

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const exist = cart.find(
      (existingProduct) => existingProduct.id === product.id
    );

    console.log(exist);

    if (!exist) {
      product.quantity = 1; // set product quantity
      setCart([...cart, product]);
    } else {
      const restProducts = cart.filter(
        (existingProduct) => existingProduct.id !== product.id
      );
      exist.quantity = exist.quantity + 1;
      setCart([...restProducts, exist]);
    }

    // Add product to local storage
    // addToDb(product.id);
  };

  const handleRemoveFromCart = (productId) => {
    const remaining = cart.filter((product) => product.id !== productId);

    setCart(remaining);
  };

  console.log(cart);

  const info = { cart, handleAddToCart, handleRemoveFromCart };

  return <CartContext.Provider value={info}>{children}</CartContext.Provider>;
};

export default CartProvider;
