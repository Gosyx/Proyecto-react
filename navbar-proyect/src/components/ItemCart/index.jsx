import React from "react";
import "./itemCart.css";

const ItemCart = ({ product }) => {
  const { removeProduct } = userCartContext();
  return (
    <div className="itemCart">
      <img src={product.image} alt={product.title} />
      <div>
        <p>Titulo: {product.title}</p>
        <p>Cantidad: {product.quantity}</p>
        <p>Precio u.: {product.price}</p>
        <p>Subtotal: ${product.quantity * product.price} </p>
        <button onClick={() => removeProduct(product.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default ItemCart;
