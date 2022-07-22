import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBarId from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
    <BrowserRouter>
      <NavBarId marca="De La Terraza" />
      <Routes>
        <Route index element={<ItemListContainer greeting="Somos de la Terraza. Pintamos macetas de barro artesanalmente."/>} />
        <Route path="/categoria/:categoria" element={<ItemListContainer greeting="Somos de la Terraza. Pintamos macetas de barro artesanalmente."/>} />
        <Route path="/item/:id" element={<ItemDetailContainer subtitle="Te mostramos lo que hacemos" />} />
        <Route path="*" element={
          <div>ERROR 404 NOT FOUND</div> } />
        <Route path="/cart" element ={ <h2 className="slogan">Finalizá tu compra...</h2>} />
      </Routes>
      <br></br>
    </BrowserRouter>
    </>
  )
};

export default App;
