import React from 'react'
import './App.css'

import fibonacci from '@nium/fibonacci'
import Counter from '@nium/react-counter'

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>Hi! My name is App 2!</h1>
      <div className="card">
        <Counter />
      </div>
      <div className="card">5th fibonacci is {fibonacci(5)}</div>
    </div>
  )
}

export default App
