import { useState } from 'react'
import './App.css'
import Keyboard from './components/Keyboard'
import List from './components/List'

function App(): JSX.Element {
  const [currencies, setCurrencies] = useState(['THB', 'USD'])
  const [amounts, setAmounts] = useState(
    new Map<string, string>(currencies.map((currency) => [currency, '0'])),
  )

  /**
   * Based on the key, construct the amount
   * key: 0, 1, 2, ..., 9, ·, C,
   *
   * digit -> Append the key to the current amount
   * C -> 0
   * · -> put dot
   * Treat 1. as 1
   */
  function updateAmount(key: string): void {
    let amount = amounts.get(currencies[0])

    if (amount === undefined) {
      return
    }

    console.log('key pressed', key)
    console.log(amount)

    if (!isNaN(parseInt(key))) {
      amount = amount === '0' ? key : amount + key
    } else if (key === 'C') {
      amount = '0'
    } else if (key === '·' && !amount.includes('.')) {
      amount += amount[amount.length - 1] === '·' ? '' : '.'
    }

    const newAmounts = new Map(amounts)
    newAmounts.set(currencies[0], amount)
    setAmounts(newAmounts)
  }

  console.log('the key is', import.meta.env.VITE_EXCHANGE_RATES_DATA_API_KEY)

  return (
    <div className="App">
      <List currencies={currencies} amounts={amounts} />
      <Keyboard updateAmount={updateAmount} />
    </div>
  )
}

export default App
