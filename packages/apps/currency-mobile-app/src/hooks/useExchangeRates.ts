import useSWR from 'swr'

const LOCAL_STORAGE_EXCHANGE_RATES_KEY = 'exchangeRates'

interface ExchangeRatesAPIResponse {
  success: boolean
  timestame: number
  base: 'USD'
  date: string
  rates: Record<string, number> // example: {"THB":32.840278, "VND":23450, "KRW":1233.79501, "USD":1}
}

async function fetchExchangeRates(
  url: string,
): Promise<Error | ExchangeRatesAPIResponse> {
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
  const cachedData = localStorage.getItem(LOCAL_STORAGE_EXCHANGE_RATES_KEY)

  const { data, error, isLoading } = useSWR(
    cachedData
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
    data: cachedData ? JSON.parse(cachedData) : undefined,
    error,
    isLoading,
  }
}

export default useExchangeRates
