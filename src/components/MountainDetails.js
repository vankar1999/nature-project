import React from 'react';
import Card from 'react-bootstrap/Card';
import './MountainDetails.css'


export default function MountainDetails ({selectedMountain}) {
    return (
        <>
        {selectedMountain ?

        <div className="mountain-card">
            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src={`/assets/images/mountains/${selectedMountain.img}`} alt={`picture of ${selectedMountain.name}`} />
                <Card.Body>
                <Card.Title>{selectedMountain.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Elevation: {selectedMountain.elevation}</Card.Subtitle>
                <Card.Text>
                    {selectedMountain.desc}
                </Card.Text>
                </Card.Body>
            </Card>
        </div>

        : null}
        </>
        ); 
} 