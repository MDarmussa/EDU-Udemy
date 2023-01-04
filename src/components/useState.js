import React, {useState} from 'react'
import { Button } from 'react-bootstrap'

function StateExample() {
     const [count, setCount] = useState(0);
     const [text, setText] = useState('text');

     const handleIncrease = () => {
          setCount(count + 1)
     }
     const handleDecrease = () => {
          setCount(count - 1)
     }
     const handleInput = (e) => {
          setText(e.target.value)
          console.log(text)
     }

  return (
    <div>
          <Button onClick={handleIncrease}>+</Button>
          <Button onClick={handleDecrease}>-</Button>
          <label>Count is: {count} </label>

          <input type="text" value={text} onChange={handleInput}/>
    </div>
  )
}

export default StateExample