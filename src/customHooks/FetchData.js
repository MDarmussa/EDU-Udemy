import React, { useEffect, useState } from 'react'

//url is a param that is exported using useEffect to FetchData component. 
function useFetchData(url) {
     const [state, setState] = useState([])

     useEffect(() => {
          fetch(url)
               .then(res => res.json())
               .then(data => setState(data))
     }, [])

  return [state]
}

export default useFetchData