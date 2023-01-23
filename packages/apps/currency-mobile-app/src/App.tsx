import {useState} from 'react'
import './App.css'
import Keyboard from './components/Keyboard'
import List from './components/List'

function App() {
  const [currencies, setCurrencies] = useState(['THB', 'KRW', 'USD', 'VND'])
  const [amounts, setAmounts] = useState(new Map<string, number>(currencies.map(currency => [currency, 0])))
  
  console.log('the key is', import.meta.env.VITE_EXCHANGE_RATES_DATA_API_KEY)

  return (
    <div className="App">
      <List currencies={currencies} amounts={amounts} />
      <Keyboard />
    </div>
  )
}

export default App
