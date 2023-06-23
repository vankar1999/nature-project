import React, { useState } from 'react';

export default function ParkDetailsByAll({ nationalParks}) {
    //const parkByAll = nationalParks.filter(park => park.State === selectedLocation);
    
// console.log(parkByLocation);


    return (
        <div>
            {
                <table>
                    <thead>
                        <tr>
                            <th>Location ID</th>
                            <th>Location Name</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nationalParks.map((park) => (
                            <tr key={park.LocationID}>
                                <td>{park.LocationID.toUpperCase()}</td>
                                <td>{park.LocationName}</td>
                                <td>{park.Address}</td>
                                <td>{park.City}</td>
                                <td>{park.State}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    );
}