import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import macetas from "./utils/macetas";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const { categoria } = useParams();
  console.log(categoria);
    
  // let [items, setItems] = useState([]);

    const promise = new Promise ((resolve) => {
        setTimeout(() => resolve(macetas), 2000);
     });

     useEffect(() => {
      setIsLoading(true);
      
      promise
      .then((products) => {
        if (categoria) {
          setItems(
            products.filter((product) => product.categoria === categoria)
          );
        } else {
          setItems(products);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [categoria]);

    return ( 
        <>
        {isLoading ? (
          <p class="slogan">Estamos buscando los productos ...</p>
        ) : (
          <div className="container-fluid">
            <p class="slogan">{greeting}</p>
            <ItemList items={items}/>
          </div>
        )}
      </>   
    );
};
 
export default ItemListContainer;