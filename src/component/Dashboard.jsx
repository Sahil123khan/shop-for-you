import React from 'react'
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'
import Navbar from './Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import Blogs from '../pages/Blogs'
import Detaile from '../pages/Detaile'
import SingleProduct from './SingleProduct'
import DeleteProduct from './DeleteProduct'
import AddNewProduct from './AddNewProduct'
import { Footer } from './Footer'

const Dashboard =()=> {
  return (
    <BrowserRouter>
      <Navbar/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/detaile" element={<Detaile />} />
        <Route path='/product/:id' element={<SingleProduct/>}/>
        <Route path='/delete-product' element={<DeleteProduct/>}/>
        <Route path='/add-product' element={<AddNewProduct modelclose={() => window.history.back()} />}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
  )
}

export default Dashboard