import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore";
import { useParams } from "react-router";


const ItemListContainer = () => {
const [isLoading, setIsLoading] = useState(true);
const [items, setItems] = useState([]);
const {categoria} = useParams();
  
  useEffect(() => {
  setIsLoading(true);
  const db = getFirestore();
  let q = query(collection(db, "macetas")) 
  if(categoria) {
    q = query(q,where("categoria", "==", categoria))
  }
  getDocs(q).then((snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()}));
    setItems(data);
  });
  setIsLoading(false);
  }, [categoria]);
  
    return ( 
        <>
        {isLoading ? (
          <p className="slogan">Estamos buscando los productos ...</p>
        ) : (
          <div className="container-fluid">
            <p className="slogan">Somos de la Terraza. Pintamos macetas de barro artesanalmente.</p>
            <ItemList items={items}/>
          </div>
        )}
      </>   
    );
  };
 
export default ItemListContainer;