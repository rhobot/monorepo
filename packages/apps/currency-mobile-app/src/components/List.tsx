import './List.css'

import ListItem from './ListItem'

interface Props {
  currencies: string[]
  amounts: Map<string, string>
  onListItemClick: (currency: string) => void
}

function List({ currencies, amounts, onListItemClick }: Props): JSX.Element {
  return (
    <div className="List">
      {currencies.map((currency) => {
        return (
          <ListItem
            key={currency}
            currency={currency}
            amount={amounts.get(currency)}
            onClick={onListItemClick}
          />
        )
      })}
    </div>
  )
}

export default List
