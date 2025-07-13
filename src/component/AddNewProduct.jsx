import axios from "axios";
import React, {  useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import 'animate.css';


const AddNewProduct = ({ modelclose }) => {
  const[ischange,setischange]=useState({
    title:"",
    description:"",
    price:"",
    image:"",

  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const ontypechange=(e)=>{
    const {name,value} = e.target;
    setischange({...ischange,[name]: value});
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({...errors, [name]: ""});
    }
  }

  const validateForm = () => {
    const newErrors = {};
    
    if (!ischange.title.trim()) {
      newErrors.title = "Title is required";
    }
    
    if (!ischange.description.trim()) {
      newErrors.description = "Description is required";
    }
    
    if (!ischange.price) {
      newErrors.price = "Price is required";
    } else if (isNaN(ischange.price) || parseFloat(ischange.price) <= 0) {
      newErrors.price = "Please enter a valid price";
    }
    
    if (!ischange.image.trim()) {
      newErrors.image = "Image URL is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const postapicall =async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
   try {
    const postapi = `http://localhost:3000/products`
    await axios.post(postapi,ischange)
    
    // Dispatch custom event to notify that a product was added
    window.dispatchEvent(new Event('productAdded'));
    
    modelclose(false)
  
   } catch (error) {
    console.log("error",error);
    
    
   } finally {
    setIsSubmitting(false);
   };
   
  }

  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="absolute inset-0 bg-black opacity-30 backdrop-blur-sm "></div>

      <div className="relative w-2xl max-w-lg rounded-2xl bg-white z-10 p-4 animate__animated animate__backInDown">
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
                className={`border rounded w-full px-2 py-1 mt-1 ${errors.title ? 'border-red-500' : ''}`}
                placeholder="Enter product title"
                name="title"
                value={ischange.title}
                onChange={ontypechange}
              />
              {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </label>
            <label>
              Description
              <textarea
                className={`border rounded w-full px-2 py-1 mt-1 ${errors.description ? 'border-red-500' : ''}`}
                placeholder="Enter product description"
                name="description"
                value={ischange.description}
                onChange={ontypechange}

              ></textarea>
              {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
            </label>
            <label>
              Price
              <input
                type="number"
                className={`border rounded w-full px-2 py-1 mt-1 ${errors.price ? 'border-red-500' : ''}`}
                placeholder="Enter price"
                name="price"
                value={ischange.price}
                onChange={ontypechange}

              />
              {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
            </label>
            <label>
              Image
              <input
                type="text"
                className={`border rounded w-full px-2 py-1 mt-1 ${errors.image ? 'border-red-500' : ''}`}
                accept="image/*"
                value={ischange.image}
                name="image"
                onChange={ontypechange}
                placeholder="Enter image URL"
              />
              {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
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
              disabled={isSubmitting}
              className={`rounded px-4 py-2 mt-2  ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-500 hover:bg-blue-600'
              } text-white`}
            >
              {isSubmitting ? 'Adding Product...' : 'Add Product'}
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewProduct;
