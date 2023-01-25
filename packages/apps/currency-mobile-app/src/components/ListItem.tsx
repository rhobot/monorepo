import './ListItem.css'

interface Props {
  currency: string
  amount?: string
  onClick: (currency: string) => void
}

function ListItem({ currency, amount = '0', onClick }: Props): JSX.Element {
  return (
    <div
      className="ListItem"
      onClick={() => {
        onClick(currency)
      }}
    >
      <div className="Currency">{currency}</div>
      <div className="Input">{amount}</div>
    </div>
  )
}

export default ListItem
