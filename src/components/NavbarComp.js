import React, { useState } from 'react';
import { Navbar, Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
//import{Switch,BrowserRouter as Router,Route,Link}  from "react-router-dom"

import Home from './Home';
import Mountains from './Mountains';
import Parks from './Parks';

function NavbarComp(){

    const [currentPageName, setCurrentPageName] = useState("home")
    const handleHome = () => {setCurrentPageName("home")}
    const handleMountains = () => {setCurrentPageName("mountains")}
    const handleParks = () => {setCurrentPageName("parks")}
  
    let currentPage = null;
    switch(currentPageName){
      case "home": 
        currentPage = <Home/>;
        break;
      case "parks": 
        currentPage = <Parks/>;
        break;
      case "mountains": 
        currentPage = <Mountains/>;
        break;
      
    }
    return (
  
        <div>
        <nav>
          <ul>
           <li><a href = "#" onClick={handleHome}> Home </a></li> 
           <li><a href = "#" onClick={handleMountains}> Mountains </a></li> 
           <li><a href = "#" onClick={handleParks}> Parks </a></li> 
          </ul>
        </nav>
        {currentPage}

        </div>

    )

};

export default NavbarComp;