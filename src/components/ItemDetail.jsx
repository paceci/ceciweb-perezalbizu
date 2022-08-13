import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import ItemCount from './ItemCount';
import { CartContext } from "../contexts/CartContext";

const ItemDetail = ({maceta}) => {
    const {setCartItems, addProduct} = useContext(CartContext);
    const [count, setCount] = useState(0);
    const {categoria, precio, medida, color, stock, url} = maceta;

    function handleOnAdd(count) {
        setCount(count);
        setCartItems((prevState) => [...prevState, maceta]);
        addProduct(maceta, count);

    };

    return ( 
        <>
        <div className="card-deck row row-cols-1 row-cols-md-4 justify-content-center">
            <Card className="subtitulo text-center" style={{width: 288}}>
                <Card.Img variant="top" src={url}  />
                <Card.Body >
                    <Card.Title>{categoria}</Card.Title>
                    <Card.Text>{medida}</Card.Text>
                    <Card.Text>$ {precio}</Card.Text>
                    <Card.Text>{color}</Card.Text>
                </Card.Body>
                {(count === 0) && <ItemCount stock={stock} initial={1} onAdd={handleOnAdd}/>}
                <br></br>
                <Link to="/cart"><Button className="btn btn-secondary">Ver carrito</Button></Link>
            </Card>
        </div>
        </>

     );
}
 
export default ItemDetail;