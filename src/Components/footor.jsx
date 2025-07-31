import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#fff5e9] text-gray-800 pt-12">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 border-b border-gray-300 pb-10">
        {/* Column 1 */}
        <div>
          <h4 className="font-bold text-orange-400 mb-4">Air System Product</h4>
          <ul className="space-y-2 text-sm">
            <li>Aluminum Ceiling Diffuser</li>
            <li>Aluminum Slot Diffuser</li>
            <li>Round Aluminum Air Diffuser</li>
            <li>Aluminum 2 Slot Air Linear Diffuser</li>
            <li>300x150 Mm AC Aluminium Grill</li>
            <li>600x150 Mm AC Aluminum Grill</li>
            <li>Volume Control Damper</li>
            <li>Al Volume Control Duct Damper</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-bold text-orange-400 mb-4">Quick links</h4>
          <ul className="space-y-2 text-sm">
            <li>Shipping & Delivery Policy</li>
            <li>Terms & Conditions</li>
            <li>Privacy policy</li>
            <li>Contact us</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-bold text-orange-400 mb-4">About us</h4>
          <ul className="space-y-2 text-sm">
            <li>Our story</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="text-center md:text-left">
          <img src={`${import.meta.env.BASE_URL}img/logo3.png`} alt="Logo" className="mx-auto md:mx-0 mb-3 w-12" />
          <p className="text-sm">rkairsystem081@gmail.com</p>
          <p className="text-sm mb-2">+91 97171 47883</p>
          <p className="text-sm mb-2">Get inspired – follow us!</p>
          <div className="flex justify-center md:justify-start gap-4 pb-4 text-orange-400 text-lg">
            <FaInstagram />
            <FaFacebookF />
            <FaYoutube />
          </div>
          <p className="text-sm">Website Created by Webnics</p>
          <p className="text-sm mb-2">webnics09@gmail.com</p>
        </div>
      </div>

      {/* Popular Categories */}
      <div className="text-xs text-gray-700 max-w-7xl mx-auto px-6 py-6 border-b border-gray-300 leading-relaxed">
        <span className="font-semibold text-green-700">Popular Categories</span> | Double Deflection Louver Grill | Automatic Pulse Jet Dust Collector | Square Ceiling Diffuser | Motorized Damper | Bag House Filter | DIDW BLOWER | SISW BLOWER | LIMIT LOAD BLOWER | SPARES IMPELLER | High Pressure Blower | Duct Axial Flow Fans | Tube Axial Fans | Vane Axial Fans | and more...
      </div>

      {/* Bottom bar */}
      <div className="bg-[#e5decf] text-sm py-4 px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          We are located in: <span className="text-orange-700">OFF. Add - TOP FLOOR | D-1083-A, L/S, Bala Ji Mandi Road - Real View Public School - Jaitpur Extension Part 2, | BADARPUR, New Delhi, South East Delhi, 110044</span>
        </div>
        
      </div>

      {/* Copyright */}
      <div className="bg-[#ff9721] text-white text-center py-3 text-sm">
        © 2025, RK Air System. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
