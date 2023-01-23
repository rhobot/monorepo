import './ListItem.css'

type Props = {
  currency: string
}

function ListItem({currency}: Props) {
  return <div className="ListItem">
    <div className="Currency">{currency}</div>
    <div className="Input">input goes here</div>
    </div>
}

export default ListItem