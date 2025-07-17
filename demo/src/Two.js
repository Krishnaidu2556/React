import React from 'react'

function Two() {
    const [ count, setCount ] = React.useState(0)


  return (
    <div style={{textAlign: 'center', marginTop: '100px'}}>
        <button onClick={() => setCount(count + 1)}>increment</button>
        <br/>
        <h1>{count}</h1><br/>
        <button onClick={() => setCount(count - 1)}>decrement</button>
    </div>
  )
}

export default Two