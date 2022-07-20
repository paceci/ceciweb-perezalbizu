import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import categorias from "./utils/categorias";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {

    const { name } = useParams();
    let [items, setItems] = useState([]);

    const promise = new Promise ((resolve) => {
        setTimeout(() => resolve(categorias), 2000);
     });

     useEffect(() => {
        promise.then((res) => {
          const products = res;
          if (name) {
            setItems(products.filter((product) => product.category === name));
          } else {
            setItems(products);
          }
        });
      }, [name]);

    return ( 
        <>
        <div className="container-fluid">
            <p class="slogan">{greeting}</p>
            <ItemList items={items}/>
        </div>
        </>
        
    );
}
 
export default ItemListContainer;