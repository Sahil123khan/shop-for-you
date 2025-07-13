import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import EditProduct from "./EditProduct";

const Card = ({ getdata, onProductUpdate }) => {
  const [model, setModel] = useState(false);
  const location = useLocation();

  return (
    <div className="w-70 h-85 m-4 rounded shadow-sm flex flex-col items-center justify-between p-4 hover:shadow-lg hover:bg-slate-200  ">
      {location.pathname !== "/delete-product" && (
        <div className="w-full flex justify-end">
          <button
            className="bg-blue-500 text-sm text-white px-2 rounded-md"
            onClick={() => setModel(true)}
          >
            Edit
          </button>
        </div>
      )}
      {location.pathname !== "/delete-product" ? (
        <Link to={`/product/${getdata.id}`}>
          <div className="w-full h-40 flex items-center justify-center  rounded">
            <img
              src={getdata.image}
              alt="imageloading"
              className="max-h-36 object-contain"
            />
          </div>

          <div className={`w-full mt-2 `}>
            <h1 className={`line-clamp-1   text-lg font-semibold `}>
              {getdata.title}
            </h1>
            <p className={`line-clamp-2 text-sm`}>{getdata.description}</p>

            <button className="text-blue-500 font-semibold ">
              {`seemore...`}
            </button>

            <h5>{`Price = ₹${getdata.price}`}</h5>
          </div>
        </Link>
      ) : (
        <>
          <div className="w-full h-40 flex items-center justify-center  rounded">
            <img
              src={getdata.image}
              alt="imageloading"
              className="max-h-36 object-contain"
            />
          </div>

          <div className={`w-full mt-2 `}>
            <h1 className={`line-clamp-1   text-lg font-semibold `}>
              {getdata.title}
            </h1>
            <p className={`line-clamp-2 text-sm`}>{getdata.description}</p>

            <button className="text-blue-500 font-semibold ">
              {`seemore...`}
            </button>

            <h5>{`Price = ₹${getdata.price}`}</h5>
          </div>
        </>
      )}

      {/* Delete Button */}

      {model && (
        <EditProduct
          modelclose={setModel}
          oldvalue={getdata}
          onProductUpdate={onProductUpdate}
        />
      )}
    </div>
  );
};

export default Card;
