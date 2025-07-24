import React from 'react';

const products = [
  {
    name: 'Air Purifier 3000',
    desc: 'Advanced filtration for clean air.',
    img: '/img/product_1.png',
  },
  {
    name: 'HVAC System X500',
    desc: 'Energy-efficient heating and cooling.',
    img: '/img/product_2.png',
  },
  {
    name: 'Air Filter Replacement',
    desc: 'Regular filter replacements for optimal performance.',
    img: '/img/product_3.png',
  },
];

const ProductSection = () => {
  return (
    <section id="products" className="py-16 px-4 bg-[#f9f9f9]">
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
        Our <span className="text-[#ff9721]">Products</span>
      </h2>

      {/* Product Cards */}
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-10">
        <button className="px-6 py-2 text-white bg-[#ff9721] hover:bg-orange-500 rounded-full transition-all duration-300">
          View More
        </button>
      </div>
    </section>
  );
};

export default ProductSection;
