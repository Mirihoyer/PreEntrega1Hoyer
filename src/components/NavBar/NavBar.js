import React from 'react'
import './NavBar.css'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CarWidget } from '../CarWidget/CarWidget';
//import {LinkContainer} from 'react-router-bootstrap';

function BasicExample() {
  return (
    <Navbar /*bg="dark" variant="dark" expand="lg"*/ className='navBar'>
      <Container>
        <Navbar.Brand>
          <Nav.Link as={Link} to="/"> <img className='logo' alt='logo' src='./imagenes/LOGO.png' /></Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link>
            <Nav.Link as={Link} to="/About">Sobre Nosotros</Nav.Link>
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item >
                <Nav.Link as={Link} to="/">Todos los productos</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Nav.Link as={Link} to="/category/madera">Perchas de Madera</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Nav.Link as={Link} to="/category/acrilico">Perchas de Acrilico</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Nav.Link as={Link} to="/category/terciopelo">Perchas de Terciopelo</Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link as={Link} to="/cart"> <CarWidget /> </Nav.Link>

        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default BasicExample;

