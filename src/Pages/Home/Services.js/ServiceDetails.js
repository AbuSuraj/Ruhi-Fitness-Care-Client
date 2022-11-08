import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { _id, img, price, title, duration, description } = useLoaderData();
  return (
    <div>
      <h2 className="font-bold text-3xl text-center mt-4 mb-10 ml-4">service details</h2>
      <div className="card card-compact  mx-10 bg-base-100 shadow-xl">
          <h2 className="card-title ml-4 md:ml-10">{title}</h2>
        <figure>
          <img className="w-[50%] rounded shadow-xl" src={img} alt="service" />
        </figure>
        <div className="card-body">
          <div className="inline-block align-bottom mr-5">
                  <span className="text-2xl leading-none align-baseline">
                    $
                  </span>
                  <span className="font-bold text-5xl leading-none align-baseline">
                    {price}
                  </span>
                </div>
                <div className="inline-block align-bottom mr-5">
                  <span className="font-bold text-5xl leading-none align-baseline">
                    {duration}
                  </span>
                  <span className="text-2xl leading-none align-baseline">
                    Weeks
                  </span>
                </div>
                <h2 className="font-semibold text-xl mt-4 ">Overview:</h2>
                <p>{description}</p>
         
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
