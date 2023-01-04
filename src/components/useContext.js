import React, { createContext, useState } from 'react'

//1-create context. (it's like a storage to be delivered anywhere in the app)
const ColorContext = createContext();
//6-update the data in the context - const [data, useStata]
//2-create Provider (ColorContext.Provider). all data will be saved in the children object {children}.
//ColorContext: through this, we can reach it from any component by exporting it.
//provider does like props,
function UseContextProvider({children}) {
     //id & name usually are comming from our database or API or user input
     const [data, setState] = useState({id:'1', name:'darmussa'})

     const changeData = (id, name) => {
          setState({id, name})
     }
  return (
     <ColorContext.Provider value={{data, changeData}}>
          {children}
     </ColorContext.Provider>
  )
}

// note: all we have done in useContext steps is called contextAPI.
//3-export context to use, provider to wrap all component. ColorContext is the actual value that we need to deliver.
export {UseContextProvider, ColorContext}