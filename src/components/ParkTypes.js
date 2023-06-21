import React from 'react'

export default function ParkTypes({parkTypes}) {
    return (
        <>
          <option disabled="" value="">Select a Park Type</option>
                    {parkTypes.map(parkType=>(<option key={parkType} value={parkType}>{parkType}</option>)
                    )}
        </>
      )
}

