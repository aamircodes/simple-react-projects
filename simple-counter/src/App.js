import { useState } from 'react'
import Button from './components/Button'

function App() {
  const [counter, setCounter] = useState(0)

  const increment = () => setCounter(counter + 1)
  const decrement = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <p>counter: {counter}</p>
      <Button handleClick={increment} text='+1' />
      <Button handleClick={decrement} text='-1' />
      <Button handleClick={setToZero} text='set to 0' />
    </div>
  )
}

export default App
