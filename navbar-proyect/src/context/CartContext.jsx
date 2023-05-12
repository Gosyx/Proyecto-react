import React, { useState, useContext } from "react";
export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log("carrito: ", cart);

  const addProduct = (item, newQuantity) => {
    const newCart = cart.filter((prod) => prod.id !== item.id);
    newCart.push({ ...item, quantity: newQuantity });
    setCart(newCart);
  };

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };
  const totalProduct = () =>
    cart.reduce(
      (acumulador, productoActual) => acumulador + productoActual.quantity,
      0
    );

  const clearCart = () => setCart([]);

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const removeProduct = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
