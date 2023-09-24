import React, { useState } from "react";
// import logo from "../assets/logo.svg";

function Sam() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="p-4 flex bg-slate-500 justify-between items-center">
      <div className="lg:flex items-center">
        {/* <img
          src={logo}
          alt="Logo"
          className="mr-4"
        /> */}
      </div>
      <div>
      <ul className="lg:flex items-center space-x-6  font-semibold">
          <li className="lg:inline-block hidden">
            <a href="#">About</a>
          </li>
          <li className="lg:inline-block hidden">
            <a href="#">Service</a>
          </li>
          <li className="lg:inline-block hidden">
            <a href="#">Projects</a>
          </li>
          <li className="lg:inline-block hidden px-5 py-1.5 bg-blur bg-white/60 backdrop-blur rounded-full hover:bg-white hover:text-black transition">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-gray-700 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 right-0 bg-white w-80 py-4 p-12 mr-3 flex flex-col items-center rounded-lg shadow-lg">
          <ul className="space-y-2 flex flex-col items-center gap-3">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#" className="px-5 py-1.5 p-2 bg-yellow-300 text-white rounded-full">Contact</a>
            </li>
          </ul>
        </div>
        )}
    </nav>
  );
}

export default Sam;