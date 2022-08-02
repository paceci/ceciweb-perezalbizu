import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";
import { getFirestore, doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [maceta, setMaceta] = useState();
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const db = getFirestore();
    const itemDoc = doc (db, "macetas", id);
    getDoc(itemDoc).then((snapshot) => {
      setMaceta({...snapshot.data(), id:snapshot.id });
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
            <p className="slogan">Te mostramos lo que hacemos:</p>
            <ItemDetail maceta={maceta} />
          </>
        ) : (
          <p className="slogan">Ups! La maceta no existe ...</p>
        )}
      </div>
    </>
  );
};

export default ItemDetailContainer;