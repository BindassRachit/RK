// Components/Layout.jsx
import React from 'react';
import Navbar from './navbar';
import Footer from './footor';
import { Outlet } from 'react-router-dom'; // 👈 yeh import zaroori hai

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
