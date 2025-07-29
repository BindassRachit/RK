import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/product';

const ProductSection = () => {
  return (
    <section id="products" className="py-16 px-4 bg-[#f9f9f9]">
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
        Our <span className="text-[#ff9721]">Products</span>
      </h2>

      {/* Product Cards Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.slice(0, 8).map((product, index) => (
          <Link
            key={index}
            to={`/product/${product.id}`}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 block"
          >
            <img
              src={product.images?.[0]}
              alt={product.name}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-10">
        <Link
          to="/products"
          className="px-6 py-2 text-white bg-[#ff9721] hover:bg-orange-500 rounded-full transition-all duration-300"
        >
          View More
        </Link>
      </div>
    </section>
  );
};

export default ProductSection;
