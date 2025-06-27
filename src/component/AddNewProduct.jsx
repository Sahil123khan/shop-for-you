import axios from "axios";
import React, {  useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

const AddNewProduct = ({ modelclose, onProductAdded }) => {
  const[ischange,setischange]=useState({
    title:"",
    description:"",
    price:"",
    image:"",

  });


  const ontypechange=(e)=>{
    const {name,value} = e.target;
    setischange({...ischange,[name]: value});
    
  }

  const postapicall =async (e) => {
    e.preventDefault();
   try {
    const postapi = `http://localhost:3000/products`
    let resp = await axios.post(postapi,ischange)
    if (onProductAdded) {
      onProductAdded(resp.data);
    }
    modelclose(false)
  
   } catch (error) {
    console.log("error",error);
    
    
   };
   
  }


  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-30 backdrop-blur-sm"></div>

      <div className="relative w-2xl max-w-lg rounded-2xl bg-white z-10 p-4">
        <div className=" border-2 border-gray-300 py-2 rounded-2xl ">
        <div className="flex justify-end  p-1">
          <button
            className="cursor-pointer text-2xl"
            onClick={() => modelclose(false)}
          >
            <IoIosCloseCircle />
          </button>
        </div>
        <div className="max-h-[70vh] overflow-y-auto">
          <form onSubmit={postapicall}className="flex flex-col gap-3 px-2">
            <label>
              Title
              <input
                type="text"
                className="border rounded w-full px-2 py-1 mt-1"
                placeholder="Enter product title"
                name="title"
                value={ischange.title}
                onChange={ontypechange}
              />
            </label>
            <label>
              Description
              <textarea
                className="border rounded w-full px-2 py-1 mt-1"
                placeholder="Enter product description"
                name="description"
                value={ischange.description}
                onChange={ontypechange}

              ></textarea>
            </label>
            <label>
              Price
              <input
                type="number"
                className="border rounded w-full px-2 py-1 mt-1"
                placeholder="Enter price"
                name="price"
                value={ischange.price}
                onChange={ontypechange}

              />
            </label>
            <label>
              Image
              <input
                type="text"
                className="border rounded w-full px-2 py-1 mt-1"
                accept="image/*"
                value={ischange.image}
                name="image"
                onChange={ontypechange}
              />
            </label>
            {ischange.image && (
              <img
                src={ischange.image}
                alt="Product Preview"
                className="w-32 h-32 object-cover mt-2 border rounded"
              />
            )}
            <button
              type="submit"
              className="bg-blue-500 text-white rounded px-4 py-2 mt-2"
            >
              Add Product
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewProduct;
