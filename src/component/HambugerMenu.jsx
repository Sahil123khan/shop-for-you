import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartFlatbedSuitcase, FaProductHunt } from "react-icons/fa6";
import { MdDeleteSweep } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useLocation } from 'react-router-dom';
 
const HambugerMenu = ({ onClose }) => {
  const location = useLocation();

  return (
    <div className='w-full bg-gray-800 text-white p-4'>
      <div className='flex justify-between items-center mb-4'>
        
        <button onClick={onClose} className="text-white text-xl absolute top-5 right-5">
          <IoClose />
        </button>
      </div>
      
      <div className='flex flex-col gap-4'>
        <Link 
          className="text-gray-300 hover:text-white py-2 border-b border-gray-600" 
          to="/"
          onClick={onClose}
        >
          Home
        </Link>
        <Link 
          className="text-gray-300 hover:text-white py-2 border-b border-gray-600" 
          to="/about"
          onClick={onClose}
        >
          About
        </Link>
        <Link 
          className="text-gray-300 hover:text-white py-2 border-b border-gray-600" 
          to="/blogs"
          onClick={onClose}
        >
          Blogs
        </Link>
        <Link 
          className="text-gray-300 hover:text-white py-2 border-b border-gray-600" 
          to="/detaile"
          onClick={onClose}
        >
          Detaile
        </Link>
        
        {/* Mobile Buttons */}
        <div className="flex flex-col gap-2 mt-4">
          {location.pathname !== "/delete-product" && (
            <Link to="/add-product" onClick={onClose}>
              <button className="flex items-center gap-2 text-sky-500 hover:text-sky-300 py-2">
                <FaProductHunt />
                Add Product
              </button>
            </Link>
          )}

          {location.pathname !== "/delete-product" && (
            <Link to="/delete-product" onClick={onClose}>
              <button className="flex items-center gap-2 text-red-400 hover:text-red-300 py-2">
                <MdDeleteSweep size={20} />
                Delete Products
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default HambugerMenu