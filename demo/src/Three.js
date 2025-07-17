import React from 'react'

function Three() {
    const [ input, setInput ] = React.useState('')
  return (
    <div>
        <form>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <p>User Input: {input}</p>
        </form>
    </div>
  )
}

export default Three