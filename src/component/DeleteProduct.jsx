import React from 'react'
import { useHome } from '../context/HomeProvider';
import Card from './Card';
import { MdDelete } from "react-icons/md";


const DeleteProduct = () => {
  const {islodading , apidata}=useHome();
  return (
    <>
    <div className=' flex flex-wrap justify-center items-center ] '>
      {islodading ? (<h1>loading....</h1>) : (
        apidata.map((currentelm)=>{
        return(
          <div className='relative'>
        <Card key={currentelm.id} getdata={currentelm}/>
        <button className='absolute top-4 right-3 m-2 text-red-500 hover:text-red-700'>
          <MdDelete size={20}/>
        </button>
        </div>
        )
        })
      )}
      </div>
    </>
  )
}

export default DeleteProduct;