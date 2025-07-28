import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductSection from './productSection';
import ProductDetail from './productdetail';

const MainSection = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductSection />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default MainSection;
