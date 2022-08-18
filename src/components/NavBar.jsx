import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import image from "../logoDLT.png";
import CartWidget from "./CartWidget";
import { Link, useNavigate } from "react-router-dom";

const NavBarId = ({pages}) => {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  }
  
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
        <Navbar.Collapse className="justify-content-end">
          <Nav className="nav-menu_container nav-link" >
            {pages.map((page) => (
                <Nav.Item key={page.name}>
                {page.nested ?
                  <NavDropdown title={page.name} id="nav-dropdown" >
                    {page.nested.map(({name, url}) => {
                      return <NavDropdown.Item key={name} className="nav-link" onClick={() => handleRedirect(url)} >{name}</NavDropdown.Item>
                    })}
                  </NavDropdown> :
                  <Nav.Item href="#/home" key={page.name} onClick={() => handleRedirect(page.url)} className="nav-item_element">
                    {page.name}
                  </Nav.Item>
                }
                </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
          <Link to="/cart" className="nav-link"><CartWidget /></Link>
      </Container>
    </Navbar>
  );
};

export default NavBarId;

