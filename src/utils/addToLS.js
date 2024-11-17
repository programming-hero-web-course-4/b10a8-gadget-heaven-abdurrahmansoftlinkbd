import toast from "react-hot-toast";

const getStoredCart = () => {
  const storedCartStr = localStorage.getItem("cart-list");
  if (storedCartStr) {
    const storedCart = JSON.parse(storedCartStr);
    return storedCart;
  } else {
    return [];
  }
};

const addToStoredCart = (id) => {
  const storedCart = getStoredCart();
  if (storedCart.includes(id)) {
    console.log(id, "already exists in the cart");
    toast.error("Already exists in the cart");
  } else {
    storedCart.push(id);
    const storedCartStr = JSON.stringify(storedCart);
    localStorage.setItem("cart-list", storedCartStr);
    toast.success("Added To Cart");
  }
};

const getStoredWishList = () => {
  const storedWishListStr = localStorage.getItem("wish-list");
  if (storedWishListStr) {
    const storedWishList = JSON.parse(storedWishListStr);
    return storedWishList;
  } else {
    return [];
  }
};

const addToStoredWishList = (id) => {
  const storedWishList = getStoredWishList();
  if (storedWishList.includes(id)) {
    console.log(id, "already exists in the wish list");
    toast.error("Already exists in the wish list");
  } else {
    storedWishList.push(id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem("wish-list", storedWishListStr);
    toast.success("Added To Wishlist");
  }
};

export { addToStoredCart, addToStoredWishList, getStoredCart };
