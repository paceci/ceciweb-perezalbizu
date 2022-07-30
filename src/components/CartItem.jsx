import React from "react";
import { CartContext } from "../contexts/CartContext";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";

const CartItem = () => {
    const {item, quantity, removeItem} = useContext(CartContext)
    return ( 
        <>
        <Card className="container-fluid subtitulo text-center" style={{width: 288}}>
            <Card.Body>
                <Card.Text>{maceta.categoria}</Card.Text>
                <Card.Text>{maceta.medida}</Card.Text>
                <Card.Text>$ {maceta.precio}</Card.Text>
                <Card.Text>{maceta.color}</Card.Text>
                <Card.Text>{`De este modelo estás llevando ${maceta.count}`}</Card.Text>
                <Button onClick={removeProduct} className="btn btn-secondary" >Eliminar Maceta</Button>
            </Card.Body>
            <Link to="/" ><Button onClick={clearCart} className="btn btn-secondary" >Vaciar carrito</Button></Link>
        </Card>
        </>
     );
}
 
export default CartItem;