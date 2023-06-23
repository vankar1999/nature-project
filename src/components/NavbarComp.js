import './NavbarComp.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComp({handleHome, handleMountains, handleParks}){

    return (
      <Navbar expand="lg" className="navbar-background-color bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#" onClick={handleHome}>Home</Nav.Link>
              <Nav.Link href="#" onClick={handleMountains}>Mountains</Nav.Link>
              <Nav.Link href="#" onClick={handleParks}>Parks</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
 
export default NavbarComp;