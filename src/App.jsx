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
import ProductDetail from './Components/productdetail'; // make sure spelling is correct
import About from './Components/about';
import ContactPage from './Components/contactUs';

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
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
