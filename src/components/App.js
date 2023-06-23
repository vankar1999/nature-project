import './App.css';
import React, { useState } from 'react';
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
    default: <Home/>;
  }

  return (
    <div>
      <NavbarComp  handleHome={handleHome} handleMountains={handleMountains} handleParks={handleParks} /> 
      <div className="container" id="heroContainer">   
        <div className="hero-text ">
          <h1 id="website-title"> Nature Exploration</h1>
        </div>
        <div className="hero-text ">
          <h4 id="website-subtitle">For outdoor enthusiasts</h4>
        </div>
      </div>
      <div>
        <CurrentPage currentPage={currentPage} />
      </div>
    </div>

  );
}

export default App;
