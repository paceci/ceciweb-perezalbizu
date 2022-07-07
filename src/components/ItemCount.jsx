import React, { useState } from "react";

function ItemCount(props) {
    const [count, setCount] = useState(props.initial);

    function handleAdd() {
        if (count < props.stock)
        setCount(count + 1);
    }

    function handleSustract() {
        if (count >= 2)
        setCount(count - 1);

    }

    return ( 
        <>
        <h1 class="counterText">Cuantas macetas queres comprar?</h1>
        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
            <button onClick={handleSustract} class="btn btn-secondary me-md-2" type="button">-</button>
            <span> {count} </span>
            <button onClick={handleAdd} class="btn btn-secondary" type="button">+</button>
        </div>
        <br />
        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
            <button class="btn btn-secondary" type="button">Agregar al Carrito</button>
        </div>
        </>
    );
}
 
export default ItemCount;