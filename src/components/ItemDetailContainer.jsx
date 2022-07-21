import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import macetas from "./utils/macetas"; 
import { useParams} from "react-router";


function getItem() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(macetas);
    }, 2000);
  });
}

const ItemDetailContainer = ({ subtitle }) => {
  const [maceta, setMaceta] = useState({categoria:"", url:"", medida:"", precio:"", stock:0, color:""});
  const {id} = useParams();
  console.log(id);

  useEffect(() => {
    getItem().then((respuestaPromise) => {
      console.log(respuestaPromise[0]);
      if (id) {
        const modelo = respuestaPromise.filter((modelo) => {
          console.log(modelo);
          console.log(id);
        return modelo.id === id; })
        console.log(modelo);
        setMaceta(modelo);      }
    });
  }, [id]);

  return (
    <>
      <div className="container-fluid justify-content-center">
        <p class="slogan">{subtitle}</p>
        {/* <ItemDetail maceta={maceta} /> */}
      </div>
    </>
  );
};

export default ItemDetailContainer;