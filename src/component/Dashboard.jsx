import React from 'react'
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'
import Navbar from './navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import Blogs from '../pages/Blogs'
import Detaile from '../pages/Detaile'


const Dashboard =()=> {
  return (
    <BrowserRouter>
      <Navbar/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/detaile" element={<Detaile />} />
     </Routes>
    </BrowserRouter>
  )
}

export default Dashboard