import React from 'react';
import { Link } from 'react-router-dom';
import products from "../data/product";
import Navbar from './navbar';
import Footer from './footor';


const AllProducts = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        {/* Heading with two-color */}
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-[#ff9721]">All</span> <span className="text-black">Products</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] group cursor-pointer flex flex-col h-[480px]">
                
                <img
                  src={product.images?.[0]}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />

                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#ff9721] transition">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 flex-grow overflow-hidden">
                    {product.description.slice(0, 90)}...
                  </p>
                  <div className="mt-4">
                    <span className="text-sm font-medium text-[#ff9721]">View Details →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;
