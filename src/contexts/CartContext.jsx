import React, {useState, createContext} from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    console.log('carrito: ', cartItems);

    const addProduct = (item, count) => {
        if(isInCart(item.id)) {
            setCartItems(cartItems.map(product => {
                return product.id === item.id ? { ...product, count:product.count + count} : product
            }));
        } else {
            setCartItems([...cartItems, { ...item, count }]);
        }
    }

    const clearCart = ()=> setCartItems([]);
    
    const isInCart = (id) => cartItems.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCartItems(cartItems.filter(product => product.id !== id));


    return ( 
        <CartContext.Provider value={{cartItems, setCartItems, addProduct, clearCart, isInCart, removeProduct}}>
            {props.children}
        </CartContext.Provider>
     );
};
 
export default CartProvider;