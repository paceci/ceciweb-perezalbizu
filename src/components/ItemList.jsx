import React from "react";
import Item from './Item';


const ItemList = (props) => {
    console.log(("Render ItemList", props.items));
    
    return (
        <>
        <h2 className="slogan">Lista de Macetas</h2>
        {
            props.items.map(
                cadaItem => 
                <Item items={cadaItem} />)
        }
        </>
    )
}
 
export default ItemList;