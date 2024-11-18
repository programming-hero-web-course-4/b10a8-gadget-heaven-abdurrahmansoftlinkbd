import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Gadgets from "../components/Gadgets";
import GadgetDetails from "../pages/GadgetDetails";
import CustomerService from "../pages/CustomerService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <Gadgets></Gadgets>,
            loader: () => fetch("../gadgets.json"),
          },
          {
            path: "/gadgets/:gadgetsCategory",
            element: <Gadgets></Gadgets>,
            loader: () => fetch("../gadgets.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("../gadgets.json"),
      },
      {
        path: "/customerservice",
        element: <CustomerService></CustomerService>,
      },
      {
        path: "/gadget/:id",
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch("../gadgets.json"),
      },
    ],
  },
]);

export default router;
