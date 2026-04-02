import React from 'react'
import { Outlet } from 'react-router-dom';
import WhatsappFloat from "../Common/WhatsappFloat";
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsappFloat />
    </div>
  );
};

export default MainLayout