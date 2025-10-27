import { useState } from "react";
import logo from "../assets/logo-udemy.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed  top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-8 py-3 gap-4 w-full">
        {/* --- Left Section (Logo + Explore) --- */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <img src={logo} alt="Udemy logo" className="w-24 md:w-28" />
          <a
            href="#"
            className="text-gray-800 hover:text-blue-500 font-medium hidden sm:block"
          >
            Explore
          </a>
        </div>

        {/* --- Middle Section (Search Bar) --- */}
        <div className="relative w-[55%] md:w-[50%] lg:w-[45%]">
          <i className="fa fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          <input
            type="text"
            placeholder="Search for anything..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* --- Right Section --- */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-800 hover:text-blue-500">Plans & Pricing</a>
            <a href="#" className="text-gray-800 hover:text-blue-500">Udemy Business</a>
            <a href="#" className="text-gray-800 hover:text-blue-500">Teach on Udemy</a>
            <a href="#" className="text-gray-800 hover:text-blue-500">
              <i className="fa fa-shopping-cart"></i>
            </a>
            <button className="text-[#5022c3]  px-4 py-2 rounded border border-[#5022c3] hover:bg-[#eeeffc] transition">
              Login
            </button>
            <button className="bg-[#5022c3] text-white px-4 py-2 rounded hover:bg-[#431ca3] transition">
              Sign Up
            </button>
            <button className="text-[#5022c3] hover:bg-[#eeeffc] px-3 py-2 rounded transition border border-[#5022c3]">
              <i className="fa fa-globe"></i>
            </button>
          </div>

          {/* --- Mobile Menu --- */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* --- Mobile Dropdown Menu --- */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md mt-2 p-4 space-y-3">
          <a href="#" className="block text-gray-800 hover:text-blue-500">
            Plans & Pricing
          </a>
          <a href="#" className="block text-gray-800 hover:text-blue-500">
            Udemy Business
          </a>
          <a href="#" className="block text-gray-800 hover:text-blue-500">
            Teach on Udemy
          </a>
          <a href="#" className="block text-gray-800 hover:text-blue-500">
            <i className="fa fa-shopping-cart"></i>
          </a>
          <div className="flex space-x-2">
            <button className="text-[#5022c3] border border-[#5022c3]  px-4 py-2 rounded w-1/2 hover:bg-[#eeeffc]  transition">
              Login
            </button>
            <button className="bg-[#5022c3] text-white px-4 py-2 rounded w-1/2 hover:bg-[#431ca3] transition">
              Sign Up
            </button>
            <button className="text-[#5022c3] hover:bg-[#eeeffc] px-3 py-2 rounded transition border border-[#5022c3]">
              <i className="fa fa-globe"></i>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
