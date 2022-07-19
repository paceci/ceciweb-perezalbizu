import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import macetas from "./utils/macetas";

function getItem() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(macetas);
    }, 2000);
  });
}

const ItemDetailContainer = ({ subtitle, itemId }) => {
  const [maceta, setMaceta] = useState([]);

  useEffect(() => {
    getItem().then((respuestaPromise) => {
      const maceta = respuestaPromise.find((maceta) => macetas.id === itemId);

      setMaceta(maceta);
    });
  }, []);

  return (
    <>
      <div className="container-fluid justify-content-center">
        <p class="slogan">{subtitle}</p>
        <ItemDetail maceta={maceta} />
      </div>
    </>
  );
};

export default ItemDetailContainer;