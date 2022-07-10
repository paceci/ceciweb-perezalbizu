import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ListaProductos = ({greeting}) => {
    const BaseProductos = [
        {
            id: 1,
            nombre:"Clásica",
            medida:"N10 Chica",
            precio: 600,
            stock: 12,
            img:"/imagenes/clasica5.jpg",
        },
        {
            id:2,
            nombre:"Clásica",
            medida:"N12 Mediana",
            precio: 700,
            stock: 12,
            img:"/imagenes/clasica5.jpg",
        },
        {
            id:3,
            nombre:"Clásica",
            medida:"N14 Grande",
            precio: 800,
            stock: 12,
            img:"/imagenes/clasica5.jpg",
        },
        {
            id:4,
            nombre:"Clásica",
            medida:"N20 Extra Grande",
            precio: 1000,
            stock: 12,
            img:"/imagenes/clasica5.jpg",
        },
        {
            id:5,
            nombre:"Icono",
            medida:"N10 Chica",
            precio: 650,
            stock: 12,
            img:"/imagenes/icono5.jpg",
        },
        {
            id:6,
            nombre:"Icono",
            medida:"N12 Mediana",
            precio: 750,
            stock: 12,
            img:"/imagenes/icono5.jpg",
        },
        {
            id:7,
            nombre:"Icono",
            medida:"N14 Grande",
            precio: 850,
            stock: 12,
            img:"/imagenes/icono5.jpg",
        },
        {
            id:8,
            nombre:"Icono",
            medida:"N20 Extra Grande",
            precio: 1000,
            stock: 12,
            img:"/imagenes/icono5.jpg",
        },
        {
            id:9,
            nombre:"Cilindro",
            medida:"N10 Chica",
            precio: 700,
            stock: 12,
            img:"/imagenes/cilindro5.jpg",
        },
        {
            id:10,
            nombre:"Cilindro",
            medida:"N12 Mediana",
            precio: 800,
            stock: 12,
            img:"/imagenes/cilindro5.jpg",
        },
        {
            id:11,
            nombre:"Cilindro",
            medida:"N14 Grande",
            precio: 900,
            stock: 12,
            img:"/imagenes/cilindro5.jpg",
        },
        {
            id:12,
            nombre:"Cilindro",
            medida:"N20 Extra Grande",
            precio: 1200,
            stock: 12,
            img:"/imagenes/cilindro5.jpg",
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
                    setItems(BaseProductos);
                 }
             ).catch(
                (errorMsg) => console.error(errorMsg)
             )
        },
        []
    )

    return ( 
        <>
        <p class="slogan">{greeting}</p>
        <ItemList items={items}/>
        </>
        
    );
}
 
export default ListaProductos;