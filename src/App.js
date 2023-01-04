import React, {useContext} from 'react'
import StateExample from './components/useState'
import UseEffectExample from './components/useEffect'
import UseRefExample from './components/useRef'
import UseMemoExample from './components/useMemo'
import {ColorContext} from './components/useContext'


function App() {

  return (
    <div>
      <UseMemoExample />
    </div>
  )
}

export default App