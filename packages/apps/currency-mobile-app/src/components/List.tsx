import './List.css'

import ListItem from './ListItem'

type Props = {
  currencies: string[]
  amounts: Map<string, number>
}

function List({currencies, amounts}: Props) {
  return <div className="List">
    {currencies.map(currency => {
      return <ListItem key={currency} currency={currency} amount={amounts.get(currency)} />
    })}
  </div>
}

export default List