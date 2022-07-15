import React from "react";
import { Card } from "react-bootstrap";


const ItemDetail = ({data}) => {
    return ( 

        <>
        <div className="card-deck row row-cols-1 row-cols-md-4 justify-content-center">
            <Card className="subtitulo text-center" style={{width: 288}}>
                <Card.Img variant="top" src={data.url}  />
                <Card.Body>
                    <Card.Title>{data.medida}</Card.Title>
                    <Card.Text>{data.color}</Card.Text>
                    <Card.Text>{data.precio}</Card.Text>
                </Card.Body>
            </Card>
        </div>
        </>

     );
}
 
export default ItemDetail;