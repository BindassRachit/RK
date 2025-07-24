import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-transparent shadow-none fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div>
            <img src="img/logo3.png" alt="Logo" className="h-10" />
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6 font-medium text-sm text-black">
            {["Home", "Services", "Products", "About", "Contact Us"].map((item, index) => (
              <li key={index}>
                <a
                  href={item === "Products" ? "/products" : "#"}
                  className="relative group transition-all duration-300"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#ff9721] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black bg-opacity-80 text-white px-4 py-4">
            <ul className="space-y-4 font-medium text-sm">
              {["Home", "Products", "Readymades", "About", "Contact Us"].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="relative group transition-all duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#ff9721] transition-all duration-300 group-hover:w-full"></span>
                  </a>
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
