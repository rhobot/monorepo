import './ListItem.css'

type Props = {
  currency: string
  amount: number
}

function ListItem({currency, amount}: Props) {
  return <div className="ListItem">
    <div className="Currency">{currency}</div>
    <div className="Input">{amount}</div>
    </div>
}

export default ListItem