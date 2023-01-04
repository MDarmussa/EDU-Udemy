import React, {useEffect, useState} from 'react'
import axios from 'axios'

function FetchAxios() {
     const [state, setState] = useState([])
     const fetchData = async () => {
          await fetch('https://jsonplaceholder.typicode.com/posts', {
               method: 'GET'
          }).then(response => response.json()).then(data => setState(data))
     }

     const fetchAxios = async() => {
          const res = await axios.get('https://jsonplaceholder.typicode.com/posts')

          setState(res.data)
          console.log(res.data)
     }

     useEffect(() => {
          fetchAxios();
     }, [])

  return (
    <div>
          {state.map((item) => {
               return (<h3>{item.body}</h3>)
          })}
    </div>
  )
}

export default FetchAxios