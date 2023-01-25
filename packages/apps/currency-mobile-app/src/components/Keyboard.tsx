import './Keyboard.css'

interface Props {
  onKeyClick: (key: string) => void
}

function Keyboard({ onKeyClick }: Props): JSX.Element {
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '·', '0', 'C']

  return (
    <div className="Keyboard">
      {keys.map((key) => {
        return (
          <input
            type="button"
            key={key}
            className="Key"
            value={key}
            onClick={() => {
              onKeyClick(key)
            }}
          />
        )
      })}
    </div>
  )
}

export default Keyboard
