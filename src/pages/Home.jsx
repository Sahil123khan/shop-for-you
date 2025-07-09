import React, { useState, useEffect } from "react";
import Card from "../component/Card";
import { useHome } from "../context/HomeProvider";
import axios from "axios";

const Home = () => {
  const { isloading, apidata } = useHome();
  const [products, setProducts] = useState([]);

  // Fetch products function
  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:3000/products");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-start ">
      {isloading ? (
        <div className="w-full text-center py-10 text-xl font-semibold text-gray-500">
          Loading....
        </div>
      ) : (
        apidata.map((currentelm) => {
          return (
            <Card
              key={currentelm.id}
              getdata={currentelm}
              onProductUpdate={fetchProducts}
            />
          );
        })
      )}
    </div>
  );
};

export default Home;
