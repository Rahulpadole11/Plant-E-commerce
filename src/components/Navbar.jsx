
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaShoppingCart, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaBagShopping } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  let logoImage = "/logos/default-logo.png";
  let textColor = "text-white";

  if (path === "/") {
    logoImage = "/Heroimg/header-logo.svg";
    textColor = "text-gray-50";
  } else if (path === "/shop") {
    logoImage = "/Heroimg/footer.svg";
    textColor = "text-black";
  } else if (path === "/about") {
    logoImage = "/Heroimg/header-logo.svg";
    textColor = "text-gray-50";
  } else if (path === "/contact") {
    logoImage = "/Heroimg/header-logo.svg";
    textColor = "text-gray-50";
  } else if (path === "/cart") {
    logoImage = "/Heroimg/footer.svg";
    textColor = "text-gray-900";
  } else if (path.startsWith("/product/")) { 
    // matches any product page
    logoImage = "/Heroimg/footer.svg";
    textColor = "text-gray-900";
  }

  const cartCount = useSelector((state) => state.cart.items.length);

  return (
    <nav className={`absolute top-0 left-0 w-full z-10 ${textColor}`}>
      <div className="flex justify-between items-center px-6 py-4 bg-transparent">
       
        <img src={logoImage} alt="Logo" className="w-32 sm:w-50" />

        <div className="hidden md:flex gap-6 items-center text-sm font-medium">
          <ul className="hidden md:flex gap-6 items-center text-md font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-gray-400 " : "hover:text-gray-500"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive ? "text-gray-400 " : "hover:text-gray-500"
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-gray-400 " : "hover:text-gray-500"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-gray-400 " : "hover:text-gray-500"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <FaInstagram className="hover:text-gray-500  cursor-pointer" href="https://www.instagram.com/" />
          <FaYoutube className="hover:text-gray-500  cursor-pointer" href="https://www.youtube.com/" />
          <FaXTwitter className="hover:text-gray-500  cursor-pointer" href="https://twitter.com/" />

          <div className="relative">
            <Link to="/cart" className=" px-1 py-1 rounded font-bold ">
            <FaShoppingCart  /> 
             <span className="absolute -top-1 -right-3  text-black text-xs rounded-full mx-2 mt-2">
              {cartCount === 0 ? "" : cartCount}
            </span>
            </Link>
          </div>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl focus:outline-none transition-transform duration-300 hover:scale-110"
          >
            <span className="transition-transform duration-300 ease-in-out">
              {isOpen ? <FiX /> : <FiMenu />}
            </span>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-gray-500 bg-opacity-90 px-10 py-4 space-y-4 mt-0 transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 max-h-screen"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <ul>
          <li>
            <NavLink
              to="/"
              className="block hover:text-black w-24  hover:bg-gray-300 hover:rounded-md p-2"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className="block hover:text-black w-24  hover:bg-gray-400 hover:rounded-md p-2"
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="block hover:text-black w-24  hover:bg-gray-400 hover:rounded-md p-2"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="block hover:text-black w-24  hover:bg-gray-400 hover:rounded-md p-2"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="flex gap-4 pt-2">
          <FaFacebook className="hover:text-gray-300  cursor-pointer" href="https://www.facebook.com/" />
          <FaInstagram className="hover:text-gray-500  cursor-pointer" href="https://www.instagram.com/" />
          <FaYoutube className="hover:text-gray-500  cursor-pointer" href="https://www.youtube.com/" />
          <FaXTwitter className="hover:text-gray-500  cursor-pointer" href="https://twitter.com/" />
          <div className="relative">
            <Link to="/cart" className=" text-green-700 px-3 py-1 rounded">
              <FaShoppingCart />  <span className="absolute -top-1 -right-3  text-black text-xs rounded-full mx-2 mt-2">
              {cartCount === 0 ? "" : cartCount}
               </span>
            </Link>
           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

