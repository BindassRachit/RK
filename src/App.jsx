import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import HeroSection from "./Components/heroSection";
import Navbar from "./Components/navbar";
import Services from "./Components/service";
import ProductSection from './Components/productSection';
import StatsSection from './Components/stats';
import FAQSection from './Components/question';
import LocationMap from './Components/contact';
import AllProducts from './Components/allProducts';
import Footer from './Components/footor';
import ProductDetail from './Components/productdetail'; 
import About from './Components/about';
import ContactPage from './Components/contactUs';
import ServicePage from './Components/servicePage';

// Home page layout inside function
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Navbar />
      <Services />
      <ProductSection />
      <StatsSection />
      <FAQSection />
      <LocationMap />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router basename="/RK/"> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
