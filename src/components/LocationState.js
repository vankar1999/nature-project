import React from 'react'

export default function LocationState({locations}) {
    return (
        <>
          <option disabled="" value="">Select a location</option>
                    {locations.map(location=>(<option key={location} value={location}>{location}</option>)
                    )}
        </>
      )
}

