import React, { useEffect, useState } from 'react'
import { useHome } from '../context/HomeProvider';
import Card from './Card';
import { MdDelete } from "react-icons/md";


const DeleteProduct = () => {
  const { islodading, apidata, deleteProductFromApi } = useHome();
  const [products, setProducts] = useState([]);

  const deleteproduct = async (id) => {
    const success = await deleteProductFromApi(id);
    if (success) {
      alert("product deleted successfully");
    } else {
      alert("product not deleted");
    }
  }

  useEffect(() => {
    setProducts(apidata);
  }, [apidata])


  return (
    <>
      <div className=' flex flex-wrap justify-center items-center ] '>
        {islodading ? (<h1>loading....</h1>) : (
          products.map((currentelm) => (
            <div key={currentelm.id} className='relative'>
              <Card getdata={currentelm} />
              <button onClick={() => deleteproduct(currentelm.id)} className='absolute top-4 right-3 m-2 text-red-500 hover:text-red-700'>
                <MdDelete size={20} />
              </button>
            </div>
          ))
        )}
      </div>
    </>
  )
}

export default DeleteProduct;