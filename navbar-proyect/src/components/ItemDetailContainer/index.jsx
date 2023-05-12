import ItemDetail from "../ItemDetail";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const pages = [
  {
    id: 1,
    price: 2000,
    image: "https://gosyx.github.io/hanasitart.github.io/img/kanemati.png",
    category: "Inicio",
    title: "Stickers",
  },
  {
    id: 2,
    price: 2000,
    image: "https://gosyx.github.io/hanasitart.github.io/img/emotes/zorro.png",
    category: "Emotes",
    title: "Emotes",
  },
  {
    id: 3,
    price: 1500,
    image:
      "https://gosyx.github.io/hanasitart.github.io/img/panelespinguins.png",
    category: "Paneles",
    title: "Paneles",
  },
  {
    id: 4,
    price: 3000,
    image: "https://gosyx.github.io/hanasitart.github.io/Banners/bannersin.png",
    category: "Banners",
    title: "Banners",
  },
];

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { detalleId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(pages);
      }, 3000);
    });

    getData.then((res) =>
      setData(res.find((page) => page.id === parseInt(detalleId)))
    );
  }, []);

  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
