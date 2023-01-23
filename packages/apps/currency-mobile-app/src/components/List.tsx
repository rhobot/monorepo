import './List.css'

import ListItem from './ListItem'

function List() {
  const currencies = ['THB', 'KRW', 'USD', 'VND']

  return <div className="List">
    {currencies.map(currency => {
      return <ListItem key={currency} currency={currency} />
    })}
  </div>
}

export default List