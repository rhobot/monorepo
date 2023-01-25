import './ListItem.css'

interface Props {
  currency: string
  amount?: string
  onClick: (currency: string) => void
  keyboardHeight: number
}

function ListItem({
  currency,
  amount = '0',
  onClick,
  keyboardHeight,
}: Props): JSX.Element {
  // Set the height so that only 2 items are visible. The rest is hidden by the keyboard.
  const height = (screen.height - keyboardHeight) / 2

  return (
    <div
      className="ListItem"
      onClick={() => {
        onClick(currency)
      }}
      style={{ height }}
    >
      <div className="Currency">{currency}</div>
      <div className="Input">{amount}</div>
    </div>
  )
}

export default ListItem
