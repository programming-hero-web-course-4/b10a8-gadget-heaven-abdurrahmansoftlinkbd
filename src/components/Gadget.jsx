import React from "react";
import PropTypes from "prop-types";

const Gadget = ({ gadget }) => {
  const { product_image, product_title, price } = gadget;
  return (
    <div>
      <h2>{product_title}</h2>
    </div>
  );
};

Gadget.propTypes = {};

export default Gadget;
