import React, { useState, useMemo } from 'react'

function UseMemoExample() {
    var randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);

    const [counter, setCounter] = useState(0)
    const [test, setTest] = useState(0)

    const result = useMemo(() => {
        return (<div style={{color: randomColor}}>
              Value is {counter} := {counter * 2}
        </div>)
    }, [counter])
    //[counter] is a dependency: means my function depends on other function. this coming from useState
     //useMemo execute our value based on [counter]
     // the idea in this example, the result function can not change until the counter in use state change
  return (
    <div>
     {result}
     <button onClick={() => setCounter(counter - 1)}>-</button>
     <button onClick={() => setCounter(counter + 1)}>+</button>
     <button onClick={() => setTest(test + 1)}>test</button>
    </div>
  )
}

export default UseMemoExample