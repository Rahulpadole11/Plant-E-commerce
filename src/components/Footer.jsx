import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { NavLink } from "react-router-dom";

const Footer = () => {
  
  return (
    <footer className="bg-[#edf3d8] text-gray-800 pt-10 pb-4">
      <div className="container mx-auto px-4">
        
       
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-6">

          
          <div className="flex justify-center lg:justify-start">
            <img src="/Heroimg/footer.svg" alt="Logo" className="h-11" />
          </div>

       
          <ul className="flex sm:flex-row justify-center items-center gap-4 text-md font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-gray-500 " : "hover:text-gray-500"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive ? "text-gray-500 " : "hover:text-gray-500"
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-gray-500 " : "hover:text-gray-500"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-gray-500 " : "hover:text-gray-500"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

        
          <div className="flex justify-center gap-6 text-xl px-20 mx10">
            <a href="#" className="hover:text-green-700 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-green-700 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-green-700 transition"><FaYoutube /></a>
            <a href="#" className="hover:text-green-700 transition"><FaXTwitter /></a>
          </div>
        </div>
           
       
        <hr className="border-t border-gray-300 w-3/4 mx-auto mb-6" />

        
        <p className="text-center text-sm text-gray-600 pr5">
          &copy; 2025 Rahul Padole. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
