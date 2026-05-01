


import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10'>
      
      <div className='max-w-7xl mx-auto px-6 md:px-16 py-2 flex items-center justify-between relative text-white'>
        
        {/* Logo */}
        <Link to="/" className='font-semibold text-lg tracking-wide z-10'>
          JesseStark Hotel
        </Link>

        {/* Desktop Links */}
        <nav className='hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-10'>
          <Link className='hover:text-gray-500 transition' to="/">Home</Link>
          <Link className='hover:text-gray-500 transition' to="/services">Services</Link>
          <Link className='hover:text-gray-500 transition' to="/about">About</Link>
          <Link className='hover:text-gray-500 transition' to="/booking">Booking</Link>
        </nav>

        {/* Desktop Button */}
        <div className='hidden md:flex z-10'>
          <Link 
            className='px-5 py-2 rounded-md bg-white text-black font-medium hover:bg-gray-400 transition'
          >
            Create Account
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-2xl z-10"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/80 transition-opacity md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-white text-black shadow-lg transform transition-transform md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"  
        }`}
      >
        <div className="px-6 py-6 flex justify-between items-center border-b">
          <Link to="/" className="font-semibold text-lg text-black">
            JesseStark
          </Link>
          <button 
            className="text-2xl text-black"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        <nav className='flex flex-col mt-6 space-y-6 px-6'>
          <Link onClick={() => setMenuOpen(false)} to="/" className='text-blue-600 hover:text-black'>Home</Link>
          <Link onClick={() => setMenuOpen(false)} to="/services" className='text-blue-600 hover:text-black'>Services</Link>
          <Link onClick={() => setMenuOpen(false)} to="/about" className='text-blue-600 hover:text-black'>About</Link>
          <Link onClick={() => setMenuOpen(false)} to="/booking" className='text-blue-600 hover:text-black'>Booking</Link>

          <button
            
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-center py-3 rounded-md bg-blue-600 text-white font-medium"
          >
            Create Account 
          </button>
        </nav>
      </div>

    </header>
  )
}

export default Navbar;
