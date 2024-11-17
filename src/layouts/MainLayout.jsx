import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <Toaster />
      {/* navbar */}
      <Navbar></Navbar>
      {/* dynamic parts */}
      <div>
        <Outlet></Outlet>
      </div>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
