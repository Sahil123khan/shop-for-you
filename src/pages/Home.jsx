import React, { useEffect, useState } from 'react'
import  axios from 'axios'
const Home =()=> {

  const [apidata , setapidata] = useState([]);

const API = "https://fakestoreapi.com/products";

const getApiData = async () => {
 try {
  const res = await axios.get(API)
  setapidata(res);
  console.log('apidata',apidata);
  
 } catch (error) {
  console.log("error",error);
  
 }
};

useEffect(()=>{
 getApiData();
},[]);

  return (
      <div>
        <h1>Home</h1>
      </div>
    )
  }


export default Home
