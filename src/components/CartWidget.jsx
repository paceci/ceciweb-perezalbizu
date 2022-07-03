import React from "react";
import cart from "../cart.png";

const CartWidget = () => {
    return <img src={cart} alt="Carrito Icono"
    width={40}
    height={40}
    justify={"right"}
    style={{"border-radius":500}}
    />;
}

export default CartWidget;

