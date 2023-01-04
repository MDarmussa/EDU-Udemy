import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import About from './components/About'
import Content from './components/Content'

import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div>
     <NavBar />
     <BrowserRouter>
          <Routes>
               <Route path='/content' element={<Content />} />
               <Route path='/about' element={<About />} />
               <Route path='/footer' element={<Footer />} />
          </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App