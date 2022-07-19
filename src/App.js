import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBarId from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {

  return (
    <>
    <NavBarId marca="De La Terraza" />
    <ItemListContainer greeting="Somos de la Terraza. Pintamos macetas de barro artesanalmente."/>
    <br></br>
    <ItemDetailContainer subtitle="Te mostramos lo que hacemos" />
    </>
  );
}

export default App;
