import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar></Navbar>
      {/* dynamic parts */}
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
