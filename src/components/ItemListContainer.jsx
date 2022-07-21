import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import categorias from "./utils/categorias";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {

    const { categoria } = useParams();
    console.log(categoria);
    
    let [items, setItems] = useState([]);

    const promise = new Promise ((resolve) => {
        setTimeout(() => resolve(categorias), 2000);
     });

     useEffect(() => {
        promise.then((res) => {
          const products = res;
          if (categoria) {
            setItems(products.filter((product) => product.category === categoria));
          } else {
            setItems(products);
          }
        });
      }, [categoria]);

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