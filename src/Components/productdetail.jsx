import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/product'; // Your data file
import Navbar from './navbar';
import Footer from './footor';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id.toString() === id);

  if (!product) return <div className="text-center py-20">Product Not Found</div>;

  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-24 px-4 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT SIDE IMAGES */}
        <div>
          <img src={`${import.meta.env.BASE_URL}${product.images?.[0]}`} alt={product.name} className="w-full h-[400px] object-cover rounded-xl" />
          <div className="flex gap-4 mt-4">
            <img src={`${import.meta.env.BASE_URL}${product.images?.[0]}`} className="w-24 h-24 object-cover rounded-lg cursor-pointer border" />
            <img src={`${import.meta.env.BASE_URL}${product.images?.[1]}`} className="w-24 h-24 object-cover rounded-lg cursor-pointer border" />
            <img src={`${import.meta.env.BASE_URL}${product.images?.[2]}`} className="w-24 h-24 object-cover rounded-lg cursor-pointer border" />
          </div>
        </div>

        {/* RIGHT SIDE DETAILS */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-5">{product.name}</h1>

          {/* Description Paragraphs */}
          {product.Paragraph.map((item, index) => (
            <p key={index} className="text-gray-700 mb-3">{item.text}</p>
          ))}

          {/* Points List */}
          <ul className="list-disc list-inside text-gray-600 mt-6">
            {product.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ProductDetail;
