import PropTypes from "prop-types";
import { IoMdClose } from "react-icons/io";

const CartList = ({ gadget }) => {
  const { product_image, product_title, description, price } = gadget;

  return (
    <>
      <div className="container mx-auto font-sora flex items-center justify-between shadow-lg mb-6 p-8 ">
        <div className="flex items-center gap-8">
          <div>
            <img className="h-32" src={product_image} alt={product_title} />
          </div>
          <div className="flex flex-col items-start gap-4">
            <h2 className="font-semibold text-2xl text-left">
              {product_title}
            </h2>
            <p className="text-gray3 text-lg">{description}</p>
            <p className="text-gray4 text-xl font-semibold">Price ${price}</p>
          </div>
        </div>
        <button className="text-red-500 border border-red-500 p-2 rounded-full text-2xl">
          <IoMdClose />
        </button>
      </div>
    </>
  );
};

CartList.propTypes = {
  gadget: PropTypes.object,
};

export default CartList;
