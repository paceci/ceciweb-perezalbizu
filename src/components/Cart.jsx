import React, {useContext, useState, useEffect} from "react";
import { CartContext } from "../contexts/CartContext";
import { Card, Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";



const Cart = () => {
    const [precioFinal, setPrecioFinal] = useState(0);
    const {cartItems, removeProduct, clearCart, sendOrder} = useContext(CartContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const inputs = document.getElementsByTagName("input");
        const data = Array.from(inputs).map((input, index) => input.value);
        sendOrder(precioFinal, {nombre: data[0], telefono: data[1], email: data[2]});
        alert(`Hola! Tu pedido fue enviado! Gracias!`);
        clearCart();
    };


    useEffect(() => {
        let total = 0;
        cartItems.forEach((maceta) => {
            total+= parseInt(maceta.precio)*(maceta.count);    
        });
        setPrecioFinal(total);
    }, [cartItems]);
    
    return (
        <>
        <div className="container text-center">
            <h2 className="slogan">Finalizá tu compra...</h2>
                {cartItems.map((maceta) => (
                    <>
                    <Card
                        key={maceta.id}
                        className="container-fluid subtitulo text-center"
                        style={{width: 288}}
                    >
                        <Card.Body>
                            <Card.Text>{maceta.categoria}</Card.Text>
                            <Card.Text>{maceta.medida}</Card.Text>
                            <Card.Text>$ {maceta.precio}</Card.Text>
                            <Card.Text>{maceta.color}</Card.Text>
                            <Card.Text>{`De este modelo estás llevando ${maceta.count}`}</Card.Text>
                            <Button
                                onClick={() => removeProduct(maceta.id)}
                                className="btn btn-secondary"
                            >
                                Eliminar Maceta
                            </Button>
                        </Card.Body>
                    </Card>
                    </>
                ))}
            <h2 className="slogan">{`Tu total es de $ ${precioFinal}`}</h2>
            <Link to="/" ><Button onClick={clearCart} className="btn btn-secondary" >Vaciar carrito</Button></Link>
            <Form onSubmit={handleSubmit} className="info mb-3 container-fluid consulta col-10 col-lg-4 my-3">
                <InputGroup className="mb-3">
                    <InputGroup.Text>Nombre</InputGroup.Text>
                    <Form.Control type="text" aria-label="Nombre" />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Teléfono</InputGroup.Text>
                    <Form.Control type="tel" aria-label="Telefono" />
                </InputGroup>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
           
            <Button type="submit" 
                //  onClick={() => sendOrder(precioFinal)}
                    className="btn btn-secondary m-3" >Enviar Pedido</Button>
            </Form>
        </div>
        </>
    );
}
 
export default Cart;