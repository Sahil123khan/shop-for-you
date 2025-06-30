// src/context/HomeContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [apidata, setapidata] = useState([]);
  const [isloading, setisloading] = useState(false);

  const API = "http://localhost:3000/products";

  const getApiData = async () => {
    setisloading(true);
    try {
      const res = await axios.get(API);
      setapidata(res.data);
    } catch (error) {
      console.log("error", error);
    }
    setisloading(false);
  };

  useEffect(() => {
    getApiData();

    const handleProductAdded = () => {
      getApiData();
    };

    window.addEventListener('productAdded', handleProductAdded);

    return () => {
      window.removeEventListener('productAdded', handleProductAdded);
    };
  }, []);

  return (
    <HomeContext.Provider value={{ apidata, isloading }}>
      {children}
    </HomeContext.Provider>
  );
};

// Custom hook
export const useHome = () => useContext(HomeContext);
