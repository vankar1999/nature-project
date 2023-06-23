import React, { useState, useEffect } from 'react';
import LocationState from './LocationState';
import ParkTypes from './ParkTypes';
import ParkDetailsByLoc from './ParkDetailsByLoc';
import ParkDetailsByType from './ParkDetailsByType';
import ParkDetailsByAll from './ParkDetailsByAll';



export default function Parks() {
  const [locations, setLocations] = useState([]);
  const [parkTypes, setParkTypes] = useState([]);
  const [nationalParks, setNationalParks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  

  //fetching the locations
  useEffect(() => {
    const path = "/assets/data/locations.json"

    fetch(path)
      .then(locationsResponse => locationsResponse.json())
      .then(data => {
        setLocations(data);
      })
  }, []);

  //fetching the park types
  useEffect(() => {
    const path = "/assets/data/parkTypes.json"

    fetch(path)
      .then(parkTypesResponse => parkTypesResponse.json())
      .then(data => {
        setParkTypes(data);
      })
  }, []);

  //fetching the national parks
  useEffect(() => {
    const path = "/assets/data/nationalparks.json"

    fetch(path)
      .then(nationalParksResponse => nationalParksResponse.json())
      .then(data => {
        setNationalParks(data.parks);
      })
  }, []);

  const categories = ['By park type', 'By location', 'By All'];
  // console.log(parkTypes, locations, nationalParks);

  return (
    <div>
      <h1>National Parks</h1>
      <form>
        <select onChange={(e) => {
          const c = categories?.find((x) => x === e.target.value);
          setSelectedCategory(c);
        }}>
          <option disabled="" value="">Select one</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </form>
      {
        selectedCategory === 'By location' ?
          <div>
            <form>
              <select onChange={(e) => {
                const l = locations?.find((x) => x === e.target.value);
                setSelectedLocation(l);
              }}>
                {<LocationState locations={locations} />}
              </select>
            </form>
            {selectedLocation ? <ParkDetailsByLoc selectedLocation = {selectedLocation}   nationalParks = {nationalParks}/> : null
          }
          </div>
          : null
      }
      {
        selectedCategory === 'By park type' ?
          <div>
            <form>
              <select onChange={(e) => {
                const t = parkTypes?.find((x) => x === e.target.value);
                setSelectedType(t);
              }}>
                {<ParkTypes parkTypes={parkTypes} />} 
              </select>
            </form>
            {selectedType ? <ParkDetailsByType selectedType = {selectedType} nationalParks = {nationalParks}/> : null
          }

          </div>
          : null
      }
      {
        selectedCategory === 'By All' ?
          <div>
            {<ParkDetailsByAll nationalParks = {nationalParks}/>
          }
        </div>
          : null
      }
    </div>
  );

}

/*Next steps
1. create drops downs for list of park types and location
2. create separate arrays for parks that match whatever is selected from the parktype array AND an array for parks that match whatever is selected from the locations array
a. for the filtered parkType array, we want to filter by if the parkName includes the value that is selected from the parkType array
b. for the filtered locations array, we want to fitler by if the state == selected location 
*/
