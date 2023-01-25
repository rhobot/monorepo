import { useEffect, useState } from 'react'
import './App.css'
import Keyboard from './components/Keyboard'
import List from './components/List'
import useExchangeRates from './hooks/useExchangeRates'
import { Key } from './types'

const DECIMALS = 2
const THRESHOLD = 0.00001

/**
 * Format the target amount as follows:
 *  1. Truncate the digits to 2,
 *  2. If the amount is 0, display it as '0'
 */
function formatAmountToString(amount: number): string {
  if (amount - 0 < THRESHOLD) {
    return '0'
  }

  return amount.toFixed(DECIMALS)
}

function App(): JSX.Element {
  const [currencies, setCurrencies] = useState(['THB', 'VND', 'KRW', 'USD'])
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
  function updateAmount(key: Key): void {
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
   * Update the amounts of other currencies based on the current amount and exchange rates.
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

      // ABC amount = DEF amount * ABC usd rate / DEF usd rate
      const newAmount =
        (parseInt(newAmounts.get(currencies[0]) ?? '0') * exchangeRate) /
        exchangeRateData.rates[currencies[0]]
      newAmounts.set(currency, formatAmountToString(newAmount))
    }

    setAmounts(newAmounts)
  }

  /**
   * Switch the current currency row with the clicked row.
   */
  function handleListItemClick(currency: string): void {
    const newCurrencies = [...currencies]
    const index = newCurrencies.indexOf(currency)

    const temp = newCurrencies[0]
    newCurrencies[0] = currency
    newCurrencies[index] = temp

    setCurrencies(newCurrencies)
  }

  useEffect(() => {
    updateOtherAmounts()
  }, [amounts.get(currencies[0])])

  return (
    <div className="App">
      <List
        currencies={currencies}
        amounts={amounts}
        onListItemClick={handleListItemClick}
      />
      <Keyboard onKeyClick={updateAmount} />
    </div>
  )
}

export default App
