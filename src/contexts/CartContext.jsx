import React, {useState, createContext} from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export const CartContext = createContext();

const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

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

    const sendOrder = async (precioFinal, buyerData) => {
        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        const order = {
            items: cartItems,
            total: precioFinal,
            buyer: buyerData,
        };
        addDoc(orderCollection, order)
        .then(res => res.id) //esto devuelve el id de esa orden enviada
        .catch(err => ("error"));
    };

    return ( 
        <CartContext.Provider value={{cartItems, setCartItems, addProduct, clearCart, isInCart, removeProduct, sendOrder}}>
            {props.children}
        </CartContext.Provider>
     );
};
 
export default CartProvider;