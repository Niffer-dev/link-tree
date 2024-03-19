import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar.jsx'
import Home from './pages/home/Home.jsx'
import Userprofile from './pages/userprofile/Userprofile.jsx'

function App() {


  return(
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/userprofile' element={<Userprofile/>} />
      </Routes>

    </BrowserRouter>
  )
}  


export default App