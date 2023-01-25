import { useEffect, useRef } from 'react'
import './Keyboard.css'
import { Key } from '../types'

interface Props {
  onKeyClick: (key: Key) => void
  onHeightUpdate: (height: number) => void
}

function Keyboard({ onKeyClick, onHeightUpdate }: Props): JSX.Element {
  const keys: Key[] = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '·',
    '0',
    'C',
  ]
  const ref = useRef(null as unknown as HTMLDivElement)

  useEffect(() => {
    if (!ref.current?.clientHeight) {
      return
    }

    onHeightUpdate(ref.current.clientHeight)
  }, [ref.current?.clientHeight])

  return (
    <div ref={ref} className="Wrapper">
      <div className="Margin" />
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
    </div>
  )
}

export default Keyboard
