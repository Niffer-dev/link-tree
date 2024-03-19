import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar.jsx'
import Home from './pages/home/Home.jsx'
import Userprofile from './pages/userprofile/Userprofile.jsx'
import Preview from './pages/preview/Preview.jsx'

function App() {


  return(
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/userprofile' element={<Userprofile/>} />
        <Route path='/preview' element={<Preview/>} />
      </Routes>

    </BrowserRouter>
  )
}  


export default App