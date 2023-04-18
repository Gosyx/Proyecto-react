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

  return (
    <>
      <Title greeting={texto} />

      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
