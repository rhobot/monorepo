import React, { useState } from 'react'
import './Counter.css'

function Counter(): JSX.Element {
  const [count, setCount] = useState(0)

  return (
    <div className="Counter">
      <div className="card">
        <div>I am a reusable counter!</div>
        <button
          onClick={() => {
            setCount((count) => count + 1)
          }}
        >
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default Counter
