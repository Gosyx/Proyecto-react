import "./item.css";

import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Item = ({ info }) => {
  const nombre = useContext(CartContext);
  console.log("item: ", nombre);
  return (
    <Link to={`/detalle/${info.id}`} className="pages">
      <img src={info.image} alt="" />
      <p>{info.title}</p>
    </Link>
  );
};
export default Item;
