import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import HeroSection from "./Components/heroSection";
import Services from "./Components/service";
import ProductSection from './Components/productSection';
import StatsSection from './Components/stats';
import FAQSection from './Components/question';
import LocationMap from './Components/contact';
import AllProducts from './Components/allProducts';
import ProductDetail from './Components/productdetail'; 
import About from './Components/about';
import ContactPage from './Components/contactUs';
import ServicePage from './Components/servicePage';
import Layout from './Components/layout'; // 👈 import layout

// Home page layout
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <ProductSection />
      <StatsSection />
      <FAQSection />
      <LocationMap />
    </div>
  );
};

function App() {
  return (
    <Router basename="/RK/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<AllProducts />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<ServicePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
