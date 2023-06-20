import React, { useState, useEffect } from 'react'

export default function Mountains() {
    const [mountains, setMountains] = useState([]);

    useEffect(() => {
        const path = "/assets/data/mountains.json"
        
        fetch(path)
            .then(mountainsResponse => mountainsResponse.json())
            .then(data => {
                setMountains(data.mountains);
            })
    }, []);

console.log(mountains);

    return (
        
        <div>
            <h1>Mountains</h1>
            <p>Exploring the mountains are a great way to spend your time outdoors. Whether you're hiking for fun, attempting a new world record, or just camping near the base.

                Use our Mountain Exploration tool to learn about each mountain.

                Select a Mountain</p>
            

           
        </div>
    )
}
