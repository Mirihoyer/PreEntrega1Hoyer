import React from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CarWidget } from '../CarWidget/CarWidget';
//import {LinkContainer} from 'react-router-bootstrap';

function BasicExample() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Nav.Link as={Link} to="/">Todo Perchas</Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
            <Nav.Link as={Link} to="/About">Sobre Nosotros</Nav.Link>
            <NavDropdown title="Perchas" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1">
                <Nav.Link as={Link} to="/category/madera">Perchas de madera</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action2">
                <Nav.Link as={Link} to="/category/acrilico">Perchas de Acrilico</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3">
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

