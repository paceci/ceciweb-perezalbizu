import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ListaProductos = ({greeting}) => {
    const BaseProductos = [
        {
            id:1,
            nombre:"Clásica",
            img:"https://images.unsplash.com/photo-1534754789238-6250d515412f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            
        },
        {
            id:2,
            nombre:"Icono",
            img:"https://images.unsplash.com/photo-1621274220348-41dc235ff439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        
        },
        {
            id:3,
            nombre:"Cilindro",
            img:"https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
    
        }
        ];
        
    let [items, setItems] = useState([]);

    console.log("%c Render ItemListContainer", "color: green");
    console.log(items);

    useEffect(
        () => {
            let promiseItems = new Promise ((resolve, reject) => {
                setTimeout(
                 () => {
                     resolve(BaseProductos);
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