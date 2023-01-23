import './App.css'
import Keyboard from './components/Keyboard'
import List from './components/List'

function App() {

  console.log('the key is', import.meta.env.VITE_EXCHANGE_RATES_DATA_API_KEY)

  return (
    <div className="App">
      <List />
      <Keyboard />
    </div>
  )
}

export default App
