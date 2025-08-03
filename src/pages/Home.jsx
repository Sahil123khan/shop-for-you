import React from "react";
import Card from "../component/Card";
import { useHome } from "../context/HomeProvider";

const Home = () => {
  const { isloading, apidata } = useHome();

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
            />
          );
        })
      )}
    </div>
  );
};

export default Home;
