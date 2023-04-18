import ItemCount from "../ItemCount";
import ItemList from "../ItemList";
import React, { useEffect, useState } from "react";
import Title from "../Title";

const films = [
  {
    id: 1,
    image: "https://gosyx.github.io/hanasitart.github.io/img/emotes/zorro.png",
    title: "Emotes",
  },
  {
    id: 2,
    image:
      "https://gosyx.github.io/hanasitart.github.io/img/panelespinguins.png",
    title: "Paneles",
  },
  {
    id: 3,
    image: "https://gosyx.github.io/hanasitart.github.io/Banners/bannersin.png",
    title: "Banners",
  },
];

export const ItemListContainer = ({ texto }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(films);
      }, 3000);
    });
    getData.then((res) => setData(res));
  }, []);
  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  };
  return (
    <>
      <Title greeting={texto} />
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
