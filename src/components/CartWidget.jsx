import React from "react";
import cart from "../cart.png";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const CartWidget = () => {
    const {cartItems} = useContext(CartContext);

    return (
    <>
    {cartItems.length === 0 ? (
        <></>
    ) : (
        <>
            <img src={cart} alt="Carrito Icono"
            width={40}
            height={40}
            justify={"right"}
            style={{"borderRadius":500}}/>
            <span>{cartItems.length}</span>
        </>
    )}
    
    </>
    );
}

export default CartWidget;

