import './ListItem.css'

interface Props {
  currency: string
  amount?: number
}

function ListItem({ currency, amount = 0 }: Props): JSX.Element {
  return (
    <div className="ListItem">
      <div className="Currency">{currency}</div>
      <div className="Input">{amount}</div>
    </div>
  )
}

export default ListItem
