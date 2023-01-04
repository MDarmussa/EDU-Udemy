import React, {useEffect, useState} from 'react'
import { Button } from 'react-bootstrap';


function UseEffectExample() {
     const [count, setCount] = useState(0);
     useEffect(()=> {
          console.log('Hello from UseEffect')
     }, [])
  return (
    <div>
     <Button onClick={() => setCount(count+1)}>+</Button>
     <Button onClick={() => setCount(count-1)}>-</Button>

     <label>{count}</label>
    </div>
)
}

export default UseEffectExample