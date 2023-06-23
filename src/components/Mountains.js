import React, { useState, useEffect } from 'react'
import './Mountains.css';
import SelectMountain from './SelectMountain';
import MountainDetails from './MountainDetails'

export default function Mountains() {
    const [mountains, setMountains] = useState([]);
    const [selectedMountain, setSelectedMountain] = useState(null);

    useEffect(() => {
        const path = "/assets/data/mountains.json"

        fetch(path)
            .then(mountainsResponse => mountainsResponse.json())
            .then(data => {
                setMountains(data.mountains);
            })
    }, []);

    function compare(a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    };

    mountains.sort(compare);

    return (

        <div>
            <h1>Mountains</h1>
            <p>Exploring the mountains are a great way to spend your time outdoors. Whether you're hiking for fun, attempting a new world record, or just camping near the base.

                Use our Mountain Exploration tool to learn about each mountain.
            </p>

            <form>
                <select onChange={(e) => {
                    const m = mountains?.find((x) => x.name === e.target.value);
                    setSelectedMountain(m);
                }
                }>
                    <SelectMountain mountains={mountains} />
                </select>

            </form>


 
       <MountainDetails  selectedMountain={selectedMountain} />

        
        </div>
    )
}