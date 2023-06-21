import './App.css';
import React, { useState } from 'react';
import HeroImage from './HeroImage';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './NavbarComp';
import CurrentPage from './CurrentPage';
import Home from './Home';
import Mountains from './Mountains';
import Parks from './Parks';

function App() {
  
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
      <div className="Scenic1 container" id="mtnsSearchContainer">   
        <NavbarComp  handleHome={handleHome} handleMountains={handleMountains} handleParks={handleParks} /> 
        <h1>Outdoor Advocate Society</h1>
        {/* <HeroImage /> */}
        
      </div>
      <div>
        <CurrentPage currentPage={currentPage} />
      </div>
    </div>

  );
}

export default App;
