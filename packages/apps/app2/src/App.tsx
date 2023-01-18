import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Counter from '@nium/react-counter'

function App() {
  return (
    <div className="App">
      <h1>Hi! My name is App 2!</h1>
      <div className="card">
        <Counter />
      </div>
    </div>
  )
}

export default App
