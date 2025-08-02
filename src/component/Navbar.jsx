import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCartFlatbedSuitcase, FaProductHunt } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";
import AddNewProduct from "./AddNewProduct";
import { MdDeleteSweep } from "react-icons/md";
import HambugerMenu from "./HambugerMenu";

const Navbar = () => {
  const [modelopen, setmodelclose] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-gray-900 p-4 flex justify-evenly items-center relative">
      <div className="flex items-center gap-1 w-2xl ">
        <FaCartFlatbedSuitcase className="text-4xl text-white " />
        <h1 className="font-bold text-2xl text-sky-500">Shopping-kit</h1>
      </div>
      
      {/* Desktop Navigation - Hidden on mobile */}
      <ul className="hidden md:flex justify-between items-center gap-10">
        <li className="text-gray-400 font-bold hover:text-gray-200 hover:scale-110 transition-all duration-300">
          <Link to="/">Home</Link>
        </li>
        <li className="text-gray-400 font-bold hover:text-gray-200 hover:scale-110 transition-all duration-300">
          <Link to="/about">About</Link>
        </li>
        <li className="text-gray-400 font-bold hover:text-gray-200 hover:scale-110 transition-all duration-300">
          <Link to="/blogs">Blogs</Link>
        </li>
        <li className="text-gray-400 font-bold hover:text-gray-200 hover:scale-110 transition-all duration-300">
          <Link to="/detaile">Detaile</Link>
        </li>
      </ul>

      {/* Desktop Buttons - Hidden on mobile */}
      <div className="hidden md:flex items-center gap-4">
        {location.pathname !== "/delete-product" && (
          <button
            onClick={() => setmodelclose(true)}
            className="px-1 rounded-2xl font-light transition duration-300 ease-in-out  hover:scale-110 hover:bg-sky-300 hover:text-black  border-1 border-gray-500 cursor-pointer flex items-center text-2xl text-sky-500"
          >
            <FaProductHunt />
            Add
          </button>
        )}

        {location.pathname !== "/delete-product" && (
          <Link to="/delete-product">
            <button className="text-white cursor-pointer hover:text-red-300">
              <MdDeleteSweep size={30} />
            </button>
          </Link>
        )}
      </div>

      {/* Mobile Hamburger Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-white text-2xl"
      >
        <HiMenu />
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-800 z-50">
          <HambugerMenu onClose={() => setIsMenuOpen(false)} />
        </div>
      )}

      {modelopen && <AddNewProduct modelclose={setmodelclose} />}
    </nav>
  );
};

export default Navbar;
