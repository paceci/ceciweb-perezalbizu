import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import image from "../logoDLT.png";
import StyleOnMenu from "./StyleOnMenu";
import CartWidget from "./CartWidget";

const NavBarId = ({marca}) => {
    const estiloMenu = marca.toUpperCase();
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            style={{"border-radius":500}}
            alt="Logo DLT"
            src={image}
            width="150"
            height="auto"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link>{estiloMenu}</Nav.Link>
            <Nav.Link><StyleOnMenu menu={"Las Macetas"}/></Nav.Link>
            <Nav.Link><StyleOnMenu menu={"Imágenes"}/></Nav.Link>
            <Nav.Link><StyleOnMenu menu={"Contacto"}/></Nav.Link>
            <Nav.Link><CartWidget/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarId;

