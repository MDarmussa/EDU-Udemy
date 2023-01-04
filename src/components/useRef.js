import React, {useRef, useContext} from 'react'
import {ColorContext} from './useContext'

//aditional: we pass useContext in here and we passed the data value that is coming from useContext.js file

const UseRefExample = () => {
  //data is not used in here. because we changed the value (changeData). data carry {id:'1', name:'darmussa'}
  const {data, changeData} = useContext(ColorContext)
  console.log('line 9 in useRef', data)
  const valueInput = useRef(null);
  const focus = () => {
    valueInput.current.focus();
    console.log(valueInput.current.value)
    changeData(Math.random(), valueInput.current.value) //Math.random() is optional, it's fixed. everytime you write, 5 will stay
  }

  return (
     <div>
          <input type="text" ref={valueInput} />
          <button onClick={focus}>Focus</button>
          
     </div>
  )
}

export default UseRefExample