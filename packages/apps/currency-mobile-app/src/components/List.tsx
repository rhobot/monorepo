import './List.css'

import ListItem from './ListItem'

interface Props {
  currencies: string[]
  amounts: Map<string, number>
}

function List({ currencies, amounts }: Props): JSX.Element {
  return (
    <div className="List">
      {currencies.map((currency) => {
        return (
          <ListItem
            key={currency}
            currency={currency}
            amount={amounts.get(currency)}
          />
        )
      })}
    </div>
  )
}

export default List
