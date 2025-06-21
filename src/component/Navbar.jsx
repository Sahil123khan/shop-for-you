import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartFlatbedSuitcase } from "react-icons/fa6";



const Navbar =()=> {
  return (
      <nav className="bg-gray-200 p-4 flex justify-evenly items-center">
        <div className="flex items-center gap-1 w-2xl ">
        <FaCartFlatbedSuitcase className='text-4xl  ' />

        <h1 className='font-bold text-2xl text-sky-500'>Shopping-kit</h1>
        </div>
        <ul className="flex justify-center items-center gap-10 ">
            <li className='text-gray-500 font-bold hover:text-black hover:scale-110 transition-all duration-300'><Link to="/">Home</Link></li>
            <li className='text-gray-500 font-bold hover:text-black hover:scale-110 transition-all duration-300'><Link to="/about">About</Link></li>
            <li className='text-gray-500 font-bold hover:text-black hover:scale-110 transition-all duration-300'><Link to="/blogs">Blogs</Link></li>
            <li className='text-gray-500 font-bold hover:text-black hover:scale-110 transition-all duration-300'><Link to="/detaile">Detaile</Link></li>
        </ul>
      </nav>
    )
  }


export default Navbar