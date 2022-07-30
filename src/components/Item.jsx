import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Item = ({item}) => {
        
    return ( 
        <>
        <div>
            <Card className="subtitulo text-center" style={{width: 288}}>
                <Card.Img variant="top" src={item.url} className="Card" />
                <Card.Body>
                    <Card.Title>{item.nombre}</Card.Title>
                    <Link to={`/item/${item.id}`}><Button variant="light">Mirá las opciones</Button></Link>
                </Card.Body>
            </Card>
        </div>
        </>

    );
}
 
export default Item;