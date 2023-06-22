import React from 'react';
import Card from 'react-bootstrap/Card';


export default function MountainDetails ({selectedMountain}) {
    return (
        <>
        {selectedMountain ?
        // <div>
        //     <h4> Mountain Details </h4>
        //     <p> Name: {selectedMountain.name}</p>
        //     <p> Elevation: {selectedMountain.elevation}</p>
        //     <p> Description: {selectedMountain.desc}</p>
        //     <img src={`/assets/images/mountains/${selectedMountain.img}`} alt={`picture of ${selectedMountain.name}`} />
        // </div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`/assets/images/mountains/${selectedMountain.img}`} alt={`picture of ${selectedMountain.name}`} />
            <Card.Body>
            <Card.Title>{selectedMountain.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Elevation: {selectedMountain.elevation}</Card.Subtitle>
            <Card.Text>
                {selectedMountain.desc}
            </Card.Text>
            {/* <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link> */}
            </Card.Body>
        </Card>

            : null}
        </>
        ); 
} 