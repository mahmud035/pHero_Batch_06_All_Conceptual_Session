import React, { createContext } from 'react';

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  return <CartContext.Provider value={[]}>{children}</CartContext.Provider>;
};

export default CartProvider;
