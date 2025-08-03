import React, { createContext, useContext, useEffect, useState } from 'react';
import { GetAllData, DeleteProductFirebase } from './Firebase';

const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [apidata, setapidata] = useState([]);
  const [isloading, setisloading] = useState(false);

  const getFirebaseData = async () => {
    setisloading(true);
    try {
      const data = await GetAllData();
      setapidata(data);
    } catch (error) {
      console.log("error", error);
    }
    setisloading(false);
  };

  const deleteProductFromApi = async (id) => {
    try {
      await DeleteProductFirebase(id);
      // Update local state after successful deletion
      setapidata(prev => prev.filter(product => product.id !== id));
      return true;
    } catch (error) {
      console.error("Delete error", error);
      return false;
    }
  };

  useEffect(() => {
    getFirebaseData();

    const handleProductAdded = () => {
      getFirebaseData();
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
