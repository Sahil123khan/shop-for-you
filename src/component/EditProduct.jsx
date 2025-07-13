import axios from "axios";
import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { MdTipsAndUpdates } from "react-icons/md";


const EditProduct = ({ modelclose, oldvalue, onProductUpdate }) => {
  const [inputvalue, setinputvalue] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!inputvalue.title.trim()) newErrors.title = "Title is required";
    if (!inputvalue.description.trim()) newErrors.description = "Description is required";
    if (!inputvalue.price) newErrors.price = "Price is required";
    else if (isNaN(inputvalue.price) || Number(inputvalue.price) <= 0)
      newErrors.price = "Price must be a positive number";
    return newErrors;
  };

  const handleinput = (e) => {
    const { name, value } = e.target;
    setinputvalue({ ...inputvalue, [name]: value });
    setErrors({ ...errors, [name]: undefined });
  };

  const handlesumit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    try {
      const updateapi = `http://localhost:3000/products/${oldvalue.id}`;
      const res = await axios.put(updateapi, inputvalue);
      if (onProductUpdate) onProductUpdate();
    } catch (error) {
      console.log("error", error);
    }
    setIsSubmitting(false);
    modelclose(false);
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black opacity-50 backdrop-blur-sm inset-0 absolute"></div>

      <div className="relative bg-white rounded-2xl p-4 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-2 animate-modal">
        <div className="flex justify-end">
          <button
            onClick={() => modelclose(false)}
            className="cursor-pointer text-2xl"
          >
            <IoIosCloseCircle />
          </button>
        </div>
        <form onSubmit={handlesumit} className="flex flex-col gap-2 sm:gap-3 px-1 sm:px-2 py-2">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
            <h1 className="text-base sm:text-lg font-extrabold tracking-widest text-center">Update your product here</h1>
            <MdTipsAndUpdates size={24} className="mx-auto sm:mx-0" />
          </div>
          <label htmlFor="title" className="text-sm sm:text-base">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={inputvalue.title}
            onChange={handleinput}
            className="border-2 border-gray-300 p-2 rounded-md w-full"
            placeholder="Update Title"
          />
          {errors.title && <span className="text-red-500 text-xs">{errors.title}</span>}

          <label htmlFor="description" className="text-sm sm:text-base">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={inputvalue.description}
            onChange={handleinput}
            className="border-2 border-gray-300 p-2 rounded-md w-full"
            placeholder="Update Description"
          />
          {errors.description && <span className="text-red-500 text-xs">{errors.description}</span>}

          <label htmlFor="price" className="text-sm sm:text-base">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={inputvalue.price}
            onChange={handleinput}
            className="border-2 border-gray-300 p-2 rounded-md w-full"
            placeholder="Update Price"
          />
          {errors.price && <span className="text-red-500 text-xs">{errors.price}</span>}

          <label htmlFor="image" className="text-sm sm:text-base">Image</label>
          <input
            type="text"
            id="image"
            name="image"
            value={inputvalue.image}
            onChange={handleinput}
            className="border-2 border-gray-300 p-2 rounded-md w-full"
            placeholder="Update Image URL"
          />

          <button
            disabled={isSubmitting}
            type="submit"
            className="bg-blue-400 py-2 rounded-md text-white font-semibold mt-2 w-full"
          >
            Update Data
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
