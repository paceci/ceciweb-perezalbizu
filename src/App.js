import  React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBarId from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./contexts/CartContext"
import Cart from "./components/Cart";
import Imagenes from "./components/Imagenes";
import Contacto from "./components/Contacto";
import PAGES from "./components/utils/pages"

function App() {

  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <NavBarId pages={PAGES} marca="De La Terraza" />
        <Routes>
          <Route index element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/imagenes" element={<Imagenes />} />
          <Route path="/contacto" element={<Contacto />} />
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
