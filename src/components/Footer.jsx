import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="hero bg-gray-100 mt-24 font-sora">
        <div className="hero-content pt-24 text-center">
          <div>
            <Link to="/" className="text-4xl font-bold ">
              Gadget Heaven
            </Link>
            <p className="mt-3 mb-7 text-gray3 font-medium">
              Leading the way in cutting-edge technology and innovation.
            </p>
          </div>
        </div>
      </div>
      <hr className="container mx-auto" />
      <footer className="footer bg-gray-100 container mx-auto justify-items-center font-sora p-10">
        <nav>
          <h6 className="footer-title opacity-100">Services</h6>
          <a className="link text-gray3 link-hover">Product Support</a>
          <a className="link text-gray3 link-hover">Order Tracking</a>
          <a className="link text-gray3 link-hover">Shipping & Delivery</a>
          <a className="link text-gray3 link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title opacity-100">Company</h6>
          <a className="link text-gray3 link-hover">About us</a>
          <a className="link text-gray3 link-hover">Careers</a>
          <a className="link text-gray3 link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title opacity-100">Legal</h6>
          <a className="link text-gray3 link-hover">Terms of Service</a>
          <a className="link text-gray3 link-hover">Privacy Policy</a>
          <a className="link text-gray3 link-hover">Cookie Policy</a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
