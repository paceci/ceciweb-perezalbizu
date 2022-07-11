import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBarId from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  function handleOnAdd(count) {
    alert(`Agregaste ${count} al carrito`);
  }

  return (
    <>
    <NavBarId marca="De La Terraza" />
    <ItemListContainer greeting="Somos de la Terraza. Pintamos macetas de barro artesanalmente."/>
    <br></br>
    <ItemCount stock={8} initial={1} onAdd={handleOnAdd}/>
    </>);
}

export default App;
