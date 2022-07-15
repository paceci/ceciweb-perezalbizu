import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import clasica10 from "./utils/clasica10";



const ItemDetailContainer = ({subtitle}) => {

    const [data, setData] = useState ([]);
    

    useEffect(() => {
    
        let getItem = new Promise ((resolve, reject) => {
            setTimeout(
                () => {
                    resolve(clasica10);
            },
            2000);
            });
            getItem.then(
                (respuesta) => {
                setData(respuesta);
                }
            ).catch(
            (errorMsg) => console.error(errorMsg)
            )      
    },
    []
    )

    return ( 
        <>
        <div className="container-fluid justify-content-center">
            <p class="slogan">{subtitle}</p>
            <p>{data.color}</p>
            <ItemDetail key={data.categoria} data={data}/>
        </div>
        </>
     );
}
 
export default ItemDetailContainer;