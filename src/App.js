import  React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBarId from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./contexts/CartContext"
import Cart from "./components/Cart";


function App() {

  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <NavBarId marca="De La Terraza" />
        <Routes>
          <Route index element={<ItemListContainer greeting="Somos de la Terraza. Pintamos macetas de barro artesanalmente."/>} />
          <Route path="/categoria/:categoria" element={<ItemListContainer greeting="Somos de la Terraza. Pintamos macetas de barro artesanalmente."/>} />
          <Route path="/item/:id" element={<ItemDetailContainer subtitle="Te mostramos lo que hacemos" />} />
          <Route path="*" element={
            <div>ERROR 404 NOT FOUND</div> } />
          <Route path="/cart" element ={<Cart />} />
        </Routes>
        <br></br>
      </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
