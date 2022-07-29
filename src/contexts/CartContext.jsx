import React, {useState, createContext} from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    // const isInCart = (id) => cartItems.find(product => product.id === id) ? true : false;
    // const addItem = (item, cantidad) => {
    //     isInCart(item.id)
    // }

    return ( 
        <CartContext.Provider value={{cartItems, setCartItems}}>
            {props.children}
        </CartContext.Provider>
     );
};
 
export default CartProvider;