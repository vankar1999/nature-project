import './App.css';
import HeroImage from './HeroImage';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './NavbarComp';


// Nav Menu
import Home from './Home';
import Mountains from './Mountains';
import Parks from './Parks';
import React, { useState } from "react";



function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const handleHome = () => {setCurrentPage("home")}
  const handleMountains = () => {setCurrentPage("mountains")}
  const handleParks = () => {setCurrentPage("parks")}

  return (

    <div className="Scenic1">
      
     
      <nav>
        <ul>
         <li><a href = "./Home.js" onClick={handleHome}> Home </a></li> 
         <li><a href = "/Mountains.js" onClick={handleMountains}> Mountains </a></li> 
         <li><a href = "src/components/Parks.js" onClick={handleParks}> Parks </a></li> 
        </ul>
      </nav>

      <h1>Outdoor Advocate Society</h1>
      
      {/* <NavbarComp /> */}
      <HeroImage />
    </div>

  );
}

export default App;
