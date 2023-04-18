import ItemDetail from "../ItemDetail";
import React, { useState, useEffect } from "react";

const film = {
  id: 1,
  image: "https://gosyx.github.io/hanasitart.github.io/img/emotes/zorro.png",
  title: "Emotes",
};
export const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(film);
      }, 3000);
    });

    getData.then((res) => setData(res));
  }, []);

  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
