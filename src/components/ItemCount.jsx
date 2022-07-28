import React, { useState } from "react";

function ItemCount({initial, stock, onAdd}) {
    const [count, setCount] = useState(initial);

    function handleAdd() {
        if (count < stock)
        setCount(count + 1);
    }

    function handleSustract() {
        if (count >= 2)
        setCount(count - 1);
    }
    function handleOnAddToCart(){
        if (stock > 0 && count < stock){
            onAdd(count);
        }
    }

    return ( 
        <>
        <h1 className="counterText">Cuantas macetas queres comprar?</h1>
        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <button onClick={handleSustract} className="btn btn-secondary me-md-2" type="button">-</button>
            <span> {count} </span>
            <button onClick={handleAdd} className="btn btn-secondary" type="button">+</button>
        </div>
        <br />
        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <button onClick={handleOnAddToCart} className="btn btn-secondary" type="button">Agregar al Carrito</button>
        </div>
        </>
    );
}
 
export default ItemCount;