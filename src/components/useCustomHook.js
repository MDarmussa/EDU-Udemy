import React, { useEffect, useState } from 'react'
import useFetchData from '../customHooks/FetchData'


function UseCustomHooks() {
     const [state] = useFetchData("https://jsonplaceholder.typicode.com/todos/")
     return (
          <div>
                    {state.map((item)=> {
                         return (<h3>{item.id} {item.title}</h3>)
                    })}
          </div>
     )
}

export default UseCustomHooks