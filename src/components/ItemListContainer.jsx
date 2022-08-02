import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import {getFirestore, collection, getDocs} from "firebase/firestore";


const ItemListContainer = () => {
const [isLoading, setIsLoading] = useState(true);
const [items, setItems] = useState([]);
  
  useEffect(() => {
  setIsLoading(true);
  const db = getFirestore();
  const itemsCollection = collection(db, "macetas");
  getDocs(itemsCollection).then((snapshot) => {
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}));
    setItems(data);
  });
  setIsLoading(false);
  });
  
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