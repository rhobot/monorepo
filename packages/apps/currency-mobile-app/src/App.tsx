import { useEffect, useState } from 'react'
import './App.css'
import Keyboard from './components/Keyboard'
import List from './components/List'
import useExchangeRates from './hooks/useExchangeRates'

function App(): JSX.Element {
  const currencies = ['THB', 'VND', 'KRW', 'USD']
  const [amounts, setAmounts] = useState(
    new Map<string, string>(currencies.map((currency) => [currency, '0'])),
  )

  const { data: exchangeRateData } = useExchangeRates(currencies)

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

    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(key)) {
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

  /**
   * Update the amounts of other currencies based on the amount and exchange rates.
   */
  function updateOtherAmounts(): void {
    if (!exchangeRateData?.rates) {
      return
    }

    const newAmounts = new Map(amounts)

    for (const [currency, exchangeRate] of Object.entries(
      exchangeRateData.rates,
    )) {
      if (currency === currencies[0]) {
        continue
      }

      // Output: ABC amount = DEF amount * ABC usd rate / DEF usd rate
      const newAmount =
        ((newAmounts.get(currencies[0]) || 0) * exchangeRate) /
        exchangeRateData.rates[currencies[0]]
      newAmounts.set(currency, `${newAmount}`)
    }

    setAmounts(newAmounts)
  }

  useEffect(() => {
    updateOtherAmounts()
  }, [amounts.get(currencies[0])])

  return (
    <div className="App">
      <List currencies={currencies} amounts={amounts} />
      <Keyboard onKeyClick={updateAmount} />
    </div>
  )
}

export default App
