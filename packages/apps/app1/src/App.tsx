import React from 'react'
import './App.css'

import fibonacci from '@nium/fibonacci'
import Counter from '@nium/react-counter'

function App() {
  return (
    <div className="App">
      <h1>Hello! I'm App 1</h1>
      <div className="card">20th fibonacci is {fibonacci(20)}</div>
      <div className="card">
        <Counter />
      </div>
    </div>
  )
}

export default App
