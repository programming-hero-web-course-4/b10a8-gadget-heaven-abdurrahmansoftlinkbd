import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredCart } from "../utils/addToLS";
import CartList from "../components/CartList";
import { BiSort } from "react-icons/bi";

const Dashboard = () => {
  const [gadgets, setGadgets] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const allGadgetsCollection = useLoaderData();

  // const [sort, setSort] = useState("");

  useEffect(() => {
    const storedCart = getStoredCart();
    const cartList = allGadgetsCollection.filter((gadget) =>
      storedCart.includes(gadget.product_id)
    );
    setGadgets(cartList);

    const total = cartList.reduce((sum, gadget) => sum + gadget.price, 0);
    setTotalPrice(total);
  }, [allGadgetsCollection]);

  const handleSort = () => {
    const sortedCart = [...gadgets].sort((a, b) => b.price - a.price);
    setGadgets(sortedCart);
  };

  return (
    <>
      <div className="hero container mx-auto bg-purple-600 text-white font-sora pb-8 mb-12">
        <div className="hero-content text-center">
          <div>
            <h2 className="text-3xl font-bold px-40">Dashboard</h2>
            <p className="mt-4 px-64">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
      </div>
      <div className="text-center container mx-auto font-sora">
        <Tabs>
          <TabList>
            <Tab>Cart</Tab>
            <Tab>Wishlist</Tab>
          </TabList>

          <TabPanel>
            <div className="flex justify-between items-center my-8">
              <h2 className="font-bold text-2xl">Cart</h2>
              <div className="flex items-center gap-6">
                <h2 className="font-bold text-2xl">
                  Total cost: ${totalPrice}
                </h2>
                <button
                  onClick={handleSort}
                  className="flex items-center font-semibold text-lg text-purple-600 border border-purple-600 rounded-full gap-2 py-3 px-5 hover:bg-purple-600 hover:text-white duration-200 transition-colors ease-in-out"
                >
                  Sort by Price <BiSort />
                </button>
                <button className="font-medium text-lg bg-purple-600 text-white py-3 px-6 rounded-full border hover:bg-white hover:text-purple-600 hover:border-purple-600 duration-200 transition-colors ease-in-out">
                  Purchase
                </button>
              </div>
            </div>
            <div>
              {gadgets.map((gadget) => (
                <CartList key={gadget.product_id} gadget={gadget}></CartList>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Dashboard;
