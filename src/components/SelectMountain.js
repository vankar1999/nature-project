import React from 'react'

export default function SelectMountain({mountains}) {
  return (
    <>
      <option disabled="" value="">Select a Mountain</option>
                {mountains.map((mountain)=>(<option key={mountain.name} value={mountain.name}>{mountain.name}</option>)
                )}
    </>
  )
}
