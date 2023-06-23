import React from 'react';

export default function ParkDetailsByType({ selectedType, nationalParks }) {
    const parkByType = nationalParks.filter(park => park.LocationName.includes(selectedType));

    return (
        <div>
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
                    {parkByType.map((park) => (
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
        </div>
    );
}


