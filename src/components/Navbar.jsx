import { Link, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar container mx-auto bg-purple-600 text-white rounded-t-3xl mt-6 px-10 font-sora py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/" className="font-medium">
              Home
            </NavLink>
            <NavLink to="/statistics" className="font-medium">
              Statistics
            </NavLink>
            <NavLink to="/dashboard" className="font-medium">
              Dashboard
            </NavLink>
          </ul>
        </div>
        <Link to="/" className="text-xl font-bold">
          Gadget Heaven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-12">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium ${
                isActive ? "font-bold underline" : "hover:underline"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/statistics"
            className={({ isActive }) =>
              `font-medium ${
                isActive ? "font-bold underline" : "hover:underline"
              }`
            }
          >
            Statistics
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `font-medium ${
                isActive ? "font-bold underline" : "hover:underline"
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/customerservice"
            className={({ isActive }) =>
              `font-medium ${
                isActive ? "font-bold underline" : "hover:underline"
              }`
            }
          >
            Customer Service
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        <Link
          to="/dashboard"
          className="text-black bg-white px-4 py-4 rounded-full text-xl"
        >
          <AiOutlineShoppingCart />
        </Link>
        <Link
          to="/dashboard"
          className="text-black bg-white px-4 py-4 rounded-full text-xl"
        >
          <FaRegHeart />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
