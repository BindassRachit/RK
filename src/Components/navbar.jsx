import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link to="/" className='flex items-center space-x-2'>
              <img src={`${import.meta.env.BASE_URL}img/logo3.png`} alt="Logo" className="h-14" />
              <span className="text-2xl font-bold text-black">
                RK <span className="text-orange-500">Air</span> System
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6 font-semibold text-md text-black">
            {["Home", "Products", "Services", "About", "Contact Us"].map((item, index) => (
              <li key={index}>
                <Link
                  to={
                    item === "Home"
                      ? "/"
                      : item === "Products"
                      ? "/products"
                      : item === "Services"
                      ? "/services"
                      : item === "About"
                      ? "/about"
                      : "/contact"
                  }
                  className="relative group transition-all duration-300"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#ff9721] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-black focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white bg-opacity-95 text-black px-4 py-4">
            <ul className="space-y-4 font-medium text-sm">
              {["Home", "Services", "Products", "About", "Contact Us"].map((item, index) => (
                <li key={index}>
                  <Link
                    to={
                      item === "Home"
                        ? "/"
                        : item === "Products"
                        ? "/products"
                        : item === "Services"
                        ? "/services"
                        : item === "About"
                        ? "/about"
                        : "/contact"
                    }
                    className="relative group transition-all duration-300"
                    onClick={handleClick}
                  >
                    {item}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#ff9721] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
