import React, { useState, useReducer } from 'react'
import reducerTest from '../Reducer/reducerTest'

const initialValue = {
     count: 0
}
//reducer always takes state and action (two params)
//state and action are variables params, any names
//state is the user input value - current value
//action: is the action or change after the input is entered
//dispatch: use to execute statements when we ask for it from the reducer (apply in this example)
//count : state.count + 1  -- MEANS-- count = state.count + 1 (: is like =)
//in real projects, we put the reducer is a seperate file to be reached from any components. useReducer is like useState but is more powerfull


// const reducer = (state, action) => { // moved to src > Reducer > reducerTest.js
//      switch(action.type)
//      {
//           case 'increment':
//                return {count : state.count + 1}
//           case 'decrement':
//                return {count : state.count - 1}
//           case 'reset':
//                return {count : 0}
//           default:
//                return {}
//      }
// } 


function UseReducerExample() {
     const [state, dispatch] = useReducer(reducerTest, initialValue)

  return (
    <div>
     value is: {state.count}
          <button onClick={() => dispatch({type: 'decrement'})}>-</button>
          <button onClick={() => dispatch({type: 'increment'})}>+</button>
          <button onClick={() => dispatch({type:'reset'})}>reset</button>
    </div>
  )
}

export default UseReducerExample