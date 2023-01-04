import React, {useContext} from 'react'
import StateExample from './components/useState'
import UseEffectExample from './components/useEffect'
import UseRefExample from './components/useRef'
import {ColorContext} from './components/useContext'

function App() {
//useContext: it's a hook built-in. in here, it use to receive the data
  //store the useContext in data variable  
  const {data, changeData} = useContext(ColorContext)
  //Note: in order to import our data from useContext file, we need to use line 10   const {data, changeData} = useContext(ColorContext)

  // changeData('green')
  //5-use context
  console.log('data in app.js', data)
  return (
    <div>
      {data.id}
      {data.name}
      <UseRefExample />
    </div>
  )
}

export default App