import React from 'react'
import _ from 'lodash'

import './Demo.css'
import fibonacci from './fibonacci'

function Demo() {
  return (
    <div className="Demo">
      <h1>fibonacci() Demo</h1>
      <div className="card">
        {_.range(1, 15).map((n) => {
          return <div key={n}>{fibonacci(n)}</div>
        })}
      </div>
    </div>
  )
}

export default Demo
