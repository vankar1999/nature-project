import './NavbarComp.css';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


//import{Switch,BrowserRouter as Router,Route,Link}  from "react-router-dom"

function NavbarComp({handleHome, handleMountains, handleParks}){

    return (
      //Take 1: Working
        // <div>
        // <nav className = "navbar-comp nav-links">
        //   {/* <ul> */}
        //    <li><a href = "#" onClick={handleHome}> Home </a></li> 
        //    <li><a href = "#" onClick={handleMountains}> Mountains </a></li> 
        //    <li><a href = "#" onClick={handleParks}> Parks </a></li> 
        //   {/* </ul> */}
        // </nav>

        // </div>
      
        //Take 2: Bootstrap

      <Navbar expand="lg" className="bg-body-tertiary navbar-background">
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