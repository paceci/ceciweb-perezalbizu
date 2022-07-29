import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import ItemCount from './ItemCount';
import { CartContext } from "../contexts/CartContext";

const ItemDetail = ({maceta}) => {
    const {setCartItems} = useContext(CartContext);
    const [count, setCount] = useState(0);

    function handleOnAdd(count) {
        alert(`Agregaste ${count} al carrito`)
        setCount(count);
        setCartItems((prevState) => [...prevState, maceta])
    };

    return ( 

        <>
        <div className="card-deck row row-cols-1 row-cols-md-4 justify-content-center">
            <Card className="subtitulo text-center" style={{width: 288}}>
                <Card.Img variant="top" src={maceta.url}  />
                <Card.Body>
                    <Card.Title>{maceta.categoria}</Card.Title>
                    <Card.Text>{maceta.medida}</Card.Text>
                    <Card.Text>$ {maceta.precio}</Card.Text>
                    <Card.Text>{maceta.color}</Card.Text>
                </Card.Body>
                {(count === 0) && <ItemCount stock={maceta.stock} initial={1} onAdd={handleOnAdd}/>}
                <Link to="/cart"><button className="btn btn-secondary">Finalizá tu compra...</button></Link>
            </Card>
        </div>
        </>

     );
}
 
export default ItemDetail;