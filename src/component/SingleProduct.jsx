import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const [singleprod,setsingleprod] = useState({});
    const [error, setError] = useState(null);
    const { id } = useParams();

    const SingleProductApi = `https://fakestoreapi.com/products/${id}`

   const GetSingleProduct = async () => {
    try {
        const res = await axios.get(SingleProductApi)
        setsingleprod(res.data)
        setError(null)
        console.log('res>>>>>>.',res.data);

        
    } catch (error) {
        setError('Product details could not be loaded. Please try again later.')
        console.log('error',error);
        
    }
   }

   useEffect(()=>{
    GetSingleProduct();
   },[id])

    
  return (
    <div className="flex justify-center min-h-screen w-full bg-gray-100">
      <div className="bg-white w-full md:w-[70%] h-2/4  mt-7 mx-3 flex flex-col rounded-lg p-4 md:p-8">
        {error ? (
          <div className="text-red-500 text-center mb-4">{error}</div>
        ) : (
          <>
            {singleprod.image && (
              <img
                src={singleprod.image}
                alt={singleprod.title}
                className="w-48 h-48 object-contain mx-auto mb-6"
              />
            )}
            <h1 className="text-2xl font-bold mb-2 text-center">{singleprod.title}</h1>
            <p className="text-gray-600 text-center mb-4">{singleprod.category}</p>
            {singleprod.rating && (
              <div className="flex justify-center items-center mb-4">
                <span className="text-yellow-500 text-lg font-semibold flex items-center">
                  {singleprod.rating.rate} <span className="ml-1">⭐</span>
                </span>
                <span className="text-gray-500 text-sm ml-2">({singleprod.rating.count} reviews)</span>
              </div>
            )}
            <p className="text-gray-700 mb-4 text-center">{singleprod.description}</p>
            <div className="flex justify-center items-center">
              <span className="text-xl font-semibold text-green-600">₹{singleprod.price}</span>
            </div>
          </>
        )}
      </div>
    </div>
  )
};

export default SingleProduct;