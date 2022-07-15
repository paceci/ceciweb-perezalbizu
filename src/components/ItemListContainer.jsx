import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import categorias from "./utils/categorias";

const ListaProductos = ({greeting}) => {
            
    let [items, setItems] = useState([]);

    console.log("%c Render ItemListContainer", "color: green");
    console.log(items);

    useEffect(
        () => {
            let promiseItems = new Promise ((resolve, reject) => {
                setTimeout(
                 () => {
                     resolve(categorias);
                },
                2000);
             });
             promiseItems.then(
                 (respuesta) => {
                    setItems(respuesta);
                 }
             ).catch(
                (errorMsg) => console.error(errorMsg)
             )
        },
        []
    )

    return ( 
        <>
        <div className="container-fluid">
            <p class="slogan">{greeting}</p>
            <ItemList items={items}/>
        </div>
        </>
        
    );
}
 
export default ListaProductos;