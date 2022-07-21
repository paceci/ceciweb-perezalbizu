import React from "react";
import { Card } from "react-bootstrap";
import ItemCount from './ItemCount';



const ItemDetail = ({maceta}) => {
    function handleOnAdd(count) {
        alert(`Agregaste ${count} al carrito`)};

    return ( 

        <>
        <div className="card-deck row row-cols-1 row-cols-md-4 justify-content-center">
            <Card className="subtitulo text-center" style={{width: 288}}>
                <Card.Img variant="top" src={maceta? maceta.url:""}  />
                <Card.Body>
                    <Card.Title>{maceta.categoria}</Card.Title>
                    <Card.Text>{maceta.medida}</Card.Text>
                    <Card.Text>$ {maceta.precio}</Card.Text>
                    <Card.Text>{maceta.color}</Card.Text>
                </Card.Body>
                <ItemCount stock={maceta.stock} initial={1} onAdd={handleOnAdd}/>
            </Card>
        </div>
        </>

     );
}
 
export default ItemDetail;