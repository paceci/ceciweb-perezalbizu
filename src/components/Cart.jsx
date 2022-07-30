import React, {useContext, useState, useEffect} from "react";
import { CartContext } from "../contexts/CartContext";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";



const Cart = () => {
    const [precioFinal, setPrecioFinal] = useState(0);
    const {cartItems, removeProduct, clearCart} = useContext(CartContext);

    useEffect(() => {
        let total = 0;
        cartItems.forEach(maceta => {
            total+= parseInt(maceta.precio);    
        });
        setPrecioFinal(total);
    }, [cartItems]);
    
    return (
    <>
    <div className="slogan">
        <h2 className="slogan">Finalizá tu compra...</h2>
            {cartItems.map(maceta => (
        <>
        <Card className="container-fluid subtitulo text-center" style={{width: 288}}>
            <Card.Body>
                <Card.Text>{maceta.categoria}</Card.Text>
                <Card.Text>{maceta.medida}</Card.Text>
                <Card.Text>$ {maceta.precio}</Card.Text>
                <Card.Text>{maceta.color}</Card.Text>
                <Card.Text>{`De este modelo estás llevando ${maceta.count}`}</Card.Text>
                <Button onClick={() => removeProduct(maceta.id)} className="btn btn-secondary" >Eliminar Maceta</Button>
            </Card.Body>
        </Card>
        </>
    ))}
   
        <h2 className="slogan">{`Tu total es de $ ${precioFinal}`}</h2>
        <Link to="/" ><Button onClick={clearCart} className="btn btn-secondary" >Vaciar carrito</Button></Link>
    </div>
    </>
    );
}
 
export default Cart;