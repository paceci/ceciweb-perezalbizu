import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import macetas from "./utils/macetas";
import { useParams } from "react-router";

function getItem() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(macetas);
    }, 2000);
  });
}

const ItemDetailContainer = ({ setAmountItems, subtitle }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [maceta, setMaceta] = useState();
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);

    getItem()
      .then((items) => {
        const modelo = items.find((modelo) => modelo.id === Number(id));

        setMaceta(modelo);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <p className="slogan">Estamos buscando los productos ...</p>;
  }

  return (
    <>
      <div className="container-fluid justify-content-center">
        {maceta ? (
          <>
            <p className="slogan">{subtitle}</p>
            <ItemDetail maceta={maceta} setAmountItems={setAmountItems}/>
          </>
        ) : (
          <p className="slogan">Ups! La maceta no existe ...</p>
        )}
      </div>
    </>
  );
};

export default ItemDetailContainer;