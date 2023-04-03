import React, { createContext, useContext, useState } from 'react';
import { addToDb, removeFromDb } from '../utils/fakeDB';
import { toast } from 'react-toastify';
import { ProductContext } from './ProductProvider';
import { cartData } from '../utils/getCartData';

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const products = useContext(ProductContext);
  const [cart, setCart] = useState(cartData(products));

  console.log(cart);

  const handleAddToCart = (product) => {
    const exist = cart.find(
      (existingProduct) => existingProduct.id === product.id
    );

    console.log(exist);

    if (!exist) {
      // set new product quantity
      product.quantity = 1;
      setCart([...cart, product]);
    } else {
      const restProducts = cart.filter(
        (existingProduct) => existingProduct.id !== product.id
      );
      // update existing product quantity
      exist.quantity = exist.quantity + 1;
      setCart([...restProducts, exist]);
    }

    // Add product to local storage
    addToDb(product.id);
    toast.success('Product added successfully');
  };

  const handleRemoveFromCart = (productId) => {
    const remaining = cart.filter((product) => product.id !== productId);

    setCart(remaining);
    removeFromDb(productId); // remove from local storage
    toast.warning('Product Removed!');
  };

  const info = { cart, setCart, handleAddToCart, handleRemoveFromCart };

  return <CartContext.Provider value={info}>{children}</CartContext.Provider>;
};

export default CartProvider;
