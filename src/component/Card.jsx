import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({getdata}) => {
    
  return (
    <div className='w-70 h-80  m-4 rounded shadow-sm flex flex-col items-center  justify-between p-4 '>
      <Link to={`/product/${getdata.id}`}>
      <div className='w-full h-40 flex items-center justify-center  rounded'>
        <img src={getdata.image} alt="imageloading" className='max-h-36 object-contain'/>
      </div>
   
     
      <div className={`w-full mt-2 `}>
        <h1 className={`line-clamp-1   text-lg font-semibold `}>{getdata.title}</h1>
        <p className={`line-clamp-2 text-sm`}>{getdata.description}</p>
        
        <button
         
          className='text-blue-500 font-semibold '
        >
          {`seemore...`}
        </button>
        
        <h5>{`Price = ₹${getdata.price}`}</h5>
      </div>
      </Link>
      
      {/* Delete Button */}
   
    </div>
    
  )
}

export default Card