import React from 'react'

export default function MountainDetails ({selectedMountain}) {
    return (
        <>
        {selectedMountain ?
        <div>
            <h4> Mountain Details </h4>
            <p> Name: {selectedMountain.name}</p>
            <p> Elevation: {selectedMountain.elevation}</p>
            <p> Description: {selectedMountain.desc}</p>
            <img src={`/assets/images/mountains/${selectedMountain.img}`} />
        </div>
        : null}
        </>
        ) 
} 

