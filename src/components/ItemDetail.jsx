import React from "react";
import { Card } from "react-bootstrap";


const ItemDetail = ({maceta}) => {
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
            </Card>
        </div>
        </>

     );
}
 
export default ItemDetail;