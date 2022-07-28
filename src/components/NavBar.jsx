import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import image from "../logoDLT.png";
import StyleOnMenu from "./StyleOnMenu";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBarId = ({amountItems, marca}) => {
    const estiloMenu = marca.toUpperCase();
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Link to={"/"} className="navbar-brand">
          <img
            style={{"borderRadius":500}}
            alt="Logo DLT"
            src={image}
            width="150"
            height="auto"
            className="d-inline-block align-top"
          />
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Link to={"/"} className="nav-link" >{estiloMenu}</Link>
            <Link to={"/categoria/Clásica"} className="nav-link"><StyleOnMenu menu={"Clasica"}/></Link>
            <Link to={"/categoria/Icono"} className="nav-link"><StyleOnMenu menu={"Icono"}/></Link>
            <Link to={"/categoria/Cilindro"} className="nav-link"><StyleOnMenu menu={"Cilindro"}/></Link>
            <Nav.Link><StyleOnMenu menu={"Imágenes"}/></Nav.Link>
            <Nav.Link><StyleOnMenu menu={"Contacto"}/></Nav.Link>
            <Link to="/cart" className="nav-link"><CartWidget amountItems={amountItems}/></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarId;

