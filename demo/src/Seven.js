import React from 'react'
import { useEffect } from 'react'

function Seven() {

    const [time, setTime] = React.useState('60')

    useEffect(() => {
        if(time > 0) {
            setTimeout(() => setTime(time - 1), 1000)
            return () => clearTimeout()
        }
    }, [time])

  return (
    <div>
        Time Left: {time}  Seconds
    </div>
  )
}

export default Seven