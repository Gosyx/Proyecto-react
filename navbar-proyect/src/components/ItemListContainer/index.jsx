import ItemList from "../ItemList";
import React, { useEffect, useState } from "react";
import Title from "../Title";
import { useParams } from "react-router-dom";
const pages = [
  {
    id: 1,
    price: 2000,
    image: "https://gosyx.github.io/hanasitart.github.io/img/kanemati.png",
    category: "Stickers",
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

export const ItemListContainer = ({ texto }) => {
  const [data, setData] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(pages);
      }, 1000);
    });
    if (categoriaId) {
      getData.then((res) =>
        setData(res.filter((pages) => pages.category === categoriaId))
      );
    } else {
      getData.then((res) => setData(res));
    }
  }, [categoriaId]);

  return (
    <>
      <Title greeting={texto} />
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
