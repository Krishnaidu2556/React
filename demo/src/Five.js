import React from 'react'

function Five() {

    const [ toggle, setToggle ] = React.useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }
 
    

  return (
    <div>
        <labal>
            <input type="checkbox" onChange={handleToggle}/>
            <p>{ toggle ? 'On' : 'Off' }</p>
            
        </labal>
    </div>
  )
}

export default Five