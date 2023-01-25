import useSWR from 'swr'

async function fetchExchangeRates(url) {
  const headers = new Headers()
  headers.append('apikey', import.meta.env.VITE_EXCHANGE_RATES_DATA_API_KEY)

  const response = await fetch(url, {
    headers,
    mode: 'cors',
  })

  if (!response.ok) {
    // TODO: handle error
  }

  return await response.json()
}

interface UseExchangeRates {
  data?: any
  error?: Error
  isLoading: boolean
}

/**
 * Returns data of exchange rates per 1 USD.
 */
function useExchangeRates(currencies: string[]): UseExchangeRates {
  // Store currency exchange rates in localstorage to save
  // TODO: Implement cache invalidation.
  const hasCache = Boolean(localStorage.getItem('exchangeRates'))
  const { data, error, isLoading } = useSWR(
    hasCache
      ? null
      : `https://api.apilayer.com/exchangerates_data/latest?symbols=${currencies.join(
          ',',
        )}&base=USD`,
    fetchExchangeRates,
  )

  if (data) {
    localStorage.setItem('exchangeRates', JSON.stringify(data))
  }

  return {
    data: JSON.parse(localStorage.getItem('exchangeRates')),
    error,
    isLoading,
  }
}

export default useExchangeRates
