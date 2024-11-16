import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import GadgetsTitle from "../components/GadgetsTitle";
import Categories from "../components/Categories";

const Home = () => {
  const categories = useLoaderData();
  return (
    <>
      {/* banner */}
      <Banner></Banner>
      {/* gadgetsTitle */}
      <GadgetsTitle></GadgetsTitle>
      {/* categories */}
      <div className="container mx-auto mt-12">
        <Categories categories={categories}></Categories>
        {/* dynamicGadgets */}
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Home;
