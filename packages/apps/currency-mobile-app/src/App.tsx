import './App.css'
import Keyboard from './components/Keyboard'

function App() {

  console.log('the key is', import.meta.env.VITE_EXCHANGE_RATES_DATA_API_KEY)

  return (
    <div>
      hello world
      <Keyboard />
    </div>
  )
}

export default App
