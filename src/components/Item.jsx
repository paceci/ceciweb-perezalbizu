import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import BaseProductos from "./ItemListContainer";

const Item = (items) => {
    return ( 
        <>
        <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                    <Card>
                        <Card.Img variant="top" src={BaseProductos.id} />
                        <Card.Body>
                            <Card.Title>{BaseProductos.nombre}</Card.Title>
                            <Card.Text>{BaseProductos.medida} {BaseProductos.precio}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
        </>

    );
}
 
export default Item;