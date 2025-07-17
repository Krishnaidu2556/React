import React from 'react'

function Four() {

    const input = ['one', 'two', 'three', 'four', 'five'];
    
    
  return (
    <div>
        <ul>
            {input.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default Four