import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Card = ({getdata}) => {
    const [expande,setexpande] = useState(false)
    const [scrollon,setscrolloff]=useState(false)
  return (
    <div className='w-64 h-80  m-4 rounded shadow-sm flex flex-col items-center justify-between p-4'>
      <Link to={`/product/${getdata.id}`}>
      <div className='w-full h-40 flex items-center justify-center  rounded'>
        <img src={getdata.image} alt="imageloading" className='max-h-36 object-contain'/>
      </div>
      </Link>
     
      <div className={`w-full mt-2 ${scrollon ? `overflow-scroll` : ''}`}>
        <h1 className={`${expande ? '' : `line-clamp-1`}   text-lg font-semibold`}>{getdata.title}</h1>
        <p className={`${expande ? '' : `line-clamp-2`}`}>{getdata.description}</p>
        <button
          onClick={() => {
            setexpande(e => {
              if (e) {
                setscrolloff(false);
              } else {
                setscrolloff(true);
              }
              return !e;
            });
          }}
          className='text-blue-300 font-semibold '
        >
          {`${expande ? 'close' : 'seemore...'}`}
        </button>
        <h5>{`Price = ₹${getdata.price}`}</h5>
      </div>
    </div>
  )
}

export default Card