import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CarWidget } from '../CarWidget/CarWidget';

function BasicExample() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Todo Perchas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
            <NavDropdown title="Perchas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Percha de Madera</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Percha de Acrilico
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Percha de Metal</NavDropdown.Item>
              <NavDropdown.Divider />
             
            </NavDropdown>
          </Nav>
          <CarWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;


/*const NavBar = () => {
  return (
   <div className='menu-navbar-container'> 
   <h1 className='menu-title'>TIENDA P</h1>
   <ul className='menu-items'>
<li>
    <a href=''className='menu-list'>Productos</a>
</li>
<li>
    <a href=''className='menu-list'>Buscar</a>
</li>
<li>
    <a href=''className='menu-list'>Mis pedidos</a>
</li>
   </ul>
   </div>
  )
}

export default NavBar */
