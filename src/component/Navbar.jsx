import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCartFlatbedSuitcase, FaProductHunt} from "react-icons/fa6";
import AddNewProduct from './AddNewProduct';



const Navbar =()=> {
  const[modelopen,setmodelclose]=useState(false)

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
        <button onClick={()=>setmodelclose(true)} className='px-1 rounded-2xl font-light transition duration-300 ease-in-out  hover:scale-110 hover:bg-indigo-100  border-1 border-gray-500 cursor-pointer flex items-center text-2xl text-sky-500'>
        <FaProductHunt />

          Add
        </button>
      
        {modelopen &&  <AddNewProduct modelclose={setmodelclose}/> }
      </nav>
    )
  }


export default Navbar