import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({items}) => {
    return ( 
        <>
        <div>
            <Card className="subtitulo text-center" style={{width: 288}}>
                <Card.Img variant="top" src={items.url}  />
                <Card.Body>
                    <Card.Title>{items.nombre}</Card.Title>
                    <Link to={"/item/:id"}><Button variant="light">Mirá las opciones</Button></Link>
                </Card.Body>
            </Card>
        </div>
        </>

    );
}
 
export default Item;