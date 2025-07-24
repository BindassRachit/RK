import React, { useState, useEffect } from 'react';
import Navbar from "./Components/navbar"
import Main from "./Components/main";
import LocationMap from "./Components/contact";
import ProductSection from './Components/productSection';
import Services from './Components/service';
import Footer from './Components/footor';


function App() {

  return (
   <>
    <Main/>
    <Navbar/>
    <Services/>
    <ProductSection/>
    <LocationMap/>
    <Footer/>
   </>
  )
}

export default App
