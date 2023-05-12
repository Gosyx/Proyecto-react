import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.lenght === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <Link to="/">Hacer compras</Link>
      </>
    );
  }
  return <div>Cart</div>;
};
export default Cart;
