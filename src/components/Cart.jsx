import React, {useContext, useState, useEffect} from "react";
import { CartContext } from "../contexts/CartContext";
import { Card } from "react-bootstrap";



const Cart = () => {
    const [precioFinal, setPrecioFinal] = useState(0);
    const {cartItems} = useContext(CartContext);

    useEffect(() => {
        let total = 0;
        cartItems.forEach(maceta => {
            total+= parseInt(maceta.precio);    
        });
        setPrecioFinal(total);
    }, [cartItems]);
    return (
    <>
    <h2 className="slogan">Finalizá tu compra...</h2>
    {cartItems.map(maceta => (
        <>
        <Card className="container-fluid subtitulo text-center" style={{width: 288}}>
            <Card.Body>
                <Card.Text>{maceta.categoria}</Card.Text>
                <Card.Text>{maceta.medida}</Card.Text>
                <Card.Text>$ {maceta.precio}</Card.Text>
                <Card.Text>{maceta.color}</Card.Text>
            </Card.Body>
        </Card>
        </>
    ))}
    <h2 className="slogan">{`Tu total es de $ ${precioFinal}`}</h2>
    </>
    );
}
 
export default Cart;