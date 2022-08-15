import React from "react";
import { Container, Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import image from "../logoDLT.png";
import StyleOnMenu from "./StyleOnMenu";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { Fragment } from "react";

const NavBarId = ({marca, pages}) => {
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
          {pages.map((page) => (
                <Fragment key={page.name}>
                  {page.nested ? (
                    <NavDropdown
                    title={page.name}
                    id="basic-nav-dropdown">
                    </NavDropdown>
                  ) : (
                    <NavItem>
                      <Link
                        className="nav-link"
                        aria-current="page"
                        to={page.url}
                      >
                        {page.name}
                      </Link>
                    </NavItem>
                  )}
                </Fragment>
              ))}


            {/* <Link to={"/"} className="nav-link" >{estiloMenu}</Link>
            <Link to={"/categoria/Clásica"} className="nav-link"><StyleOnMenu menu={"Clasica"}/></Link>
            <Link to={"/categoria/Icono"} className="nav-link"><StyleOnMenu menu={"Icono"}/></Link>
            <Link to={"/categoria/Cilindro"} className="nav-link"><StyleOnMenu menu={"Cilindro"}/></Link>
            <Link to={"/imagenes"} className="nav-link"><StyleOnMenu menu={"Imagenes"}/></Link>
            <Link to={"/contacto"} className="nav-link"><StyleOnMenu menu={"Contacto"}/></Link>*/}
            <Link to="/cart" className="nav-link"><CartWidget /></Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarId;

