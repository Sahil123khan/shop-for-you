import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../component/Card';

const Home =()=> {
  const [apidata, setapidata] = useState([]);
  const [isloading, setisloading] = useState(false)

  const API = "http://localhost:3000/products";

  const getApiData = async () => {
    setisloading(true)
    try {
      const res = await axios.get(API)
      setapidata(res.data);
    } catch (error) {
      console.log("error", error);
    }
    setisloading(false)
  };

  useEffect(() => {
    getApiData();
    
    // Add event listener for product added
    const handleProductAdded = () => {
      getApiData();
    };
    
    window.addEventListener('productAdded', handleProductAdded);
    
    // Cleanup event listener
    return () => {
      window.removeEventListener('productAdded', handleProductAdded);
    };
  }, []);

 

  return (
    <div className="flex flex-wrap justify-center items-start ">
        {isloading ? (
        <div className="w-full text-center py-10 text-xl font-semibold text-gray-500">Loading....</div>
         
        ): (
        apidata.map((currentelm)=>{
          return(
            <Card key={currentelm.id} getdata={currentelm}/>
               
          );
        })
      )}
    </div>
  )
}

export default Home
