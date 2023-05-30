import React, { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();
  const [nombreCliente, setNombreCliente] = useState("");
  const fechaCompra = new Date();

  const order = {
    buyer: {
      name: nombreCliente,
      purchaseDate: fechaCompra.toLocaleString(),
    },
    items: cart.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.quantity,
    })),
    total: totalPrice(),
  };

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => console.log(id));
  };

  if (cart.lenght === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <Link to="/">Hacer compras</Link>
      </>
    );
  }
  return (
    <>
      <div>
        <input
          type="text"
          value={nombreCliente}
          onChange={(e) => setNombreCliente(e.target.value)}
          placeholder="Nombre del cliente"
        />
      </div>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>total: {totalPrice() || ""}</p>
      <button onClick={handleClick}>Emitir compra</button>
    </>
  );
};
export default Cart;
