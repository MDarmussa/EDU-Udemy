import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import About from './components/About'
import Content from './components/Content'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Error404 from './components/Error404'
import Home from './components/Home'

function App() {
  return (
    <div>
     <NavBar />
     <BrowserRouter>
          <Routes>
               <Route path='/' exact element={<Home />} />
               <Route path='/content' element={<Content />} />
               <Route path='/about' element={<About />} />
               <Route path='/footer' element={<Footer />} />
               <Route path='*' element={<Error404 />} />
          </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App