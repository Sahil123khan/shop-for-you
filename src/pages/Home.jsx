import React, { useEffect, useState } from 'react'
import  axios from 'axios'
import Card from '../component/Card';
const Home =()=> {

  const [apidata , setapidata] = useState([]);

const API = "https://fakestoreapi.com/products";

const getApiData = async () => {
 try {
  const res = await axios.get(API)
  setapidata(res.data);
  
 } catch (error) {
  console.log("error",error);
  
 }

};

useEffect(()=>{
 getApiData();
},[]);



  return (
    <div className="flex flex-wrap justify-center items-start">
      {
        apidata.map((currentelm)=>{
          return(
            <Card key={currentelm.id} getdata={currentelm}/>
          );
        })
      }
    </div>
  )
}


export default Home
