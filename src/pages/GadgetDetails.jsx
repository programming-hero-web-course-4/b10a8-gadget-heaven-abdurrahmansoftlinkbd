import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { addToStoredCart, addToStoredWishList } from "../utils/addToLS";

const GadgetDetails = () => {
  const allGadgets = useLoaderData();

  const { id } = useParams();

  const [everyGadget, setEveryGadget] = useState({});

  useEffect(() => {
    const singleGadget = allGadgets.find(
      (gadgetObj) => gadgetObj.product_id === id
    );
    setEveryGadget(singleGadget);
  }, [allGadgets, id]);

  const {
    product_id,
    product_image,
    product_title,
    price,
    availability,
    description,
    specification = [],
    rating,
  } = everyGadget;

  const starRating = {
    size: 30,
    count: 5,
    value: rating || 0,
    edit: false,
  };

  const handleAddToCart = (id) => {
    addToStoredCart(id);
  };

  const handleAddToWishList = (id) => {
    addToStoredWishList(id);
  };

  return (
    <div className="container mx-auto bg-purple-600 text-white font-sora pb-56 mb-[35rem] relative">
      <div className="hero-content text-center">
        <div>
          <h2 className="text-3xl font-bold px-40">Product Details</h2>
          <p className="mt-4 px-64">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      {/* gadgetCard */}
      <div
        className="bg-white text-zinc-950 container mx-auto flex gap-8 rounded-3xl p-8 top-[45%] absolute shadow-lg
      "
      >
        {/* gadgetImage */}
        <div className="w-2/5">
          <img className=" h-[450px]" src={product_image} alt="" />
        </div>
        {/* gadgetInfo */}
        <div className="w-3/5">
          <h2 className="text-3xl font-semibold">{product_title}</h2>
          <p className="text-xl text-gray4 font-semibold mt-3">
            Price: ${price}
          </p>
          <p className="bg-green-100 inline-block my-4 py-2 px-4 rounded-full text-sm font-medium text-green-500 border border-green-500">
            {availability ? "In Stock" : ""}
          </p>
          <p className="text-lg text-gray3 mb-4">{description}</p>
          <h3 className="text-lg font-bold text-zinc-950 mb-3">
            Specifications:
          </h3>
          <ol className="list-decimal ml-4 text-gray3 text-lg">
            {specification.map((spec, i) => (
              <li key={i}>{spec}</li>
            ))}
          </ol>
          <h4 className="font-bold text-lg mt-4">Rating</h4>
          <div className="flex items-center gap-4">
            <div>{rating && <ReactStars {...starRating} />}</div>
            <p className="bg-gray-100 py-2 px-4 text-sm font-medium rounded-full">
              {rating}
            </p>
          </div>
          <div className="flex gap-4 items-center mt-4">
            <button
              onClick={() => handleAddToCart(product_id)}
              className="flex items-center bg-purple-600 text-white gap-3 py-3 px-5 rounded-full font-bold text-lg hover:bg-purple-500 duration-200 transition-colors ease-in-out"
            >
              Add To Card
              <AiOutlineShoppingCart className="text-2xl" />
            </button>
            <button
              onClick={() => handleAddToWishList(product_id)}
              className="p-3 border border-gray-300 rounded-full text-2xl hover:bg-gray-300 duration-200 transition-colors ease-in-out"
            >
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

GadgetDetails.propTypes = {};

export default GadgetDetails;
