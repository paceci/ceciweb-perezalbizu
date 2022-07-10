import React from "react";
import { Card } from "react-bootstrap";
import BaseProductos from "./ItemListContainer";

const Item = (items) => {
    return ( 
        <>
        <Card>
            <Card.Img variant="top" src={BaseProductos.img} />
            <Card.Body>
                <Card.Title>{BaseProductos.nombre}</Card.Title>
                <Card.Text>{BaseProductos.medida} {BaseProductos.precio}</Card.Text>
            </Card.Body>
        </Card>
        </>

    );
}
 
export default Item;