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

  const deleteProductFromApi = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      setapidata(prev => prev.filter(product => product.id !== id));
      return true;
    } catch (error) {
      console.error("Delete error", error);
      return false;
    }
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
    <HomeContext.Provider value={{
      isloading,
      apidata,
      deleteProductFromApi,
    }}>
      {children}
    </HomeContext.Provider>
  );
};

export const useHome = () => useContext(HomeContext);
