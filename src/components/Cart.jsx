import React, {useContext, useState, useEffect} from "react";
import { CartContext } from "../contexts/CartContext";
import { Card, Button, Form, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";



const Cart = () => {
    const navigate = useNavigate();
    const [precioFinal, setPrecioFinal] = useState(0);
    const {cartItems, removeProduct, clearCart, sendOrder} = useContext(CartContext);
    const [form, setForm] = useState({ nombre: "", telefono: "", email: "" });
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        sendOrder(precioFinal, form);
        clearCart();
        navigate("/");
    };

    useEffect(() => {
        let total = 0;
        cartItems.forEach((maceta) => {
            total+= parseInt(maceta.precio) * maceta.count;    
        });
        setPrecioFinal(total);
    }, [cartItems]);

    const handleInputChange = ({ currentTarget }) => {
        setForm({ ...form, [currentTarget.name]: currentTarget.value });
      };
    

    return (
        <div className="container text-center">
            <h2 className="slogan">Finalizá tu compra...</h2>
            {cartItems.map((maceta) => (
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
            ))}
            <h2 className="slogan">{`Tu total es de $ ${precioFinal}`}</h2>
            <Link to="/" >
                <Button onClick={clearCart} className="btn btn-secondary" >
                    Vaciar carrito
                </Button>
            </Link>
            <Form 
                onSubmit={handleSubmit}
                className="info mb-3 container-fluid consulta col-10 col-lg-4 my-3"
            >
                <InputGroup className="mb-3">
                    <InputGroup.Text>Nombre</InputGroup.Text>
                    <Form.Control
                        type="text"
                        name="nombre"
                        aria-label="Nombre"
                        onChange={handleInputChange}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Teléfono</InputGroup.Text>
                    <Form.Control
                        type="tel"
                        name="telefono"
                        aria-label="Telefono"
                        onChange={handleInputChange}
                    />
                </InputGroup>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleInputChange}
                    />
                </Form.Group>
           
                <Button type="submit" className="btn btn-secondary m-3">
                    Enviar Pedido
                </Button>
            </Form>
          </div>
    );
}
 
export default Cart;