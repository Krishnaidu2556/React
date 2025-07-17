import React from 'react'
import { useState } from 'react'

function Sixteen() {

  const [selectedColor, setSelectedColor] = React.useState('#000000');

  const handleChnage = (e) => {
      setSelectedColor(e.target.value);

  }
  return (
    <div>
     <input type="color" onChange={handleChnage}/>
     <div style={{width: '100px', height: '100px', backgroundColor: selectedColor}}>

     </div>
    </div>
  )
}

export default Sixteen