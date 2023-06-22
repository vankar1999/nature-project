import React, { useState } from 'react';

export default function ParkDetailsByType({ selectedType, nationalParks }) {
    const parkByType = nationalParks.filter(park => park.LocationName.includes(selectedType));

    console.log(parkByType);


    return (
        <div>
            {
                <ul>
                    {parkByType.map(park => (
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
            }
        </div>
    )
}


