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
                    <Card.Title>{item.categoria}</Card.Title>
                    <Card.Text>{item.medida}</Card.Text>
                    <Link to={`/item/${item.id}`}><Button className="opciones">Mirá los detalles</Button></Link>
                </Card.Body>
            </Card>
            <br></br>
        </div>
        </>

    );
}
 
export default Item;