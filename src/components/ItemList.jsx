import React from "react";
import Item from './Item';


const ItemList = (props) => {
    
    return (
        <>
        <div>
        <h2 className="slogan">Lista de Macetas</h2>
        <div className="card-deck row row-cols-1 row-cols-md-4 justify-content-center">

        {
            props.items.map(
                cadaItem => 
                <Item key={cadaItem.id} items={cadaItem} />)
        }
        </div>
        </div>
        </>
    )
}
 
export default ItemList;