import React from "react";
import PropTypes from "prop-types";

const Gadget = ({ gadget }) => {
  const { product_image, product_title, price } = gadget;
  return (
    <div className="card bg-base-100 w-80 font-sora shadow-xl">
      <figure className="p-5">
        <img src={product_image} alt="Shoes" className="rounded-xl h-44" />
      </figure>
      <div className="card-body p-5 pt-0">
        <h2 className="card-title font-semibold">{product_title}</h2>
        <p className="text-gray3 font-medium mt-1">Price: ${price}</p>
        <div className="card-actions">
          <button className="btn font-semibold bg-white border-purple-600 text-purple-600 rounded-full hover:text-white hover:bg-purple-600 hover:border-purple-600 duration-200 transition-colors ease-in-out mt-2">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

Gadget.propTypes = {};

export default Gadget;
