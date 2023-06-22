import React, { useState } from 'react';
import LocationState from './LocationState';

export default function ParkDetails({ selectedLocation, nationalParks}) {
    const parkByLocation = nationalParks.filter(park => park.State === selectedLocation);
    
 console.log(parkByLocation);


    return (
        <div>
            {
                parkByLocation.length > 0 ?
                    <ul>
                        {parkByLocation.map(park => (
                            <li key={park.LocationID}>
                                <div>
                                    {park.LocationName}
                                    {park.Address}
                                    {park.City}
                                    {park.State}
                                    {park.ZipCode}
                                </div>
                            </li>
                        ))}
                    </ul>


                    : "There are no parks"
            }
        </div>
    )
}


