import './Keyboard.css'

interface Props {
  updateAmount: (key: string) => void
}

function Keyboard({ updateAmount }: Props): JSX.Element {
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
              updateAmount(key)
            }}
          />
        )
      })}
    </div>
  )
}

export default Keyboard
