import React from 'react'
import { Link } from 'react-router-dom'
import Hotel from '../../assets/images/Hotel.png';
import Earth from '../../assets/images/Earth.webp'

const HeroSection = () => {
  return (
    <section className='relative h-screen flex items-center overflow-hidden'>

      {/* 🖼️ Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center scale-105'
        style={{ backgroundImage: `url(${Earth})` }}
      ></div>

      {/* 🌑 Luxury Overlay */}
      <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30'></div>

      {/* 📦 Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full'>
        
        {/* TEXT ONLY (Luxury Style) */}
        <div className='max-w-xl text-white'>

          <h1 className='text-4xl md:text-6xl font-semibold leading-tight'>
            Experience <span
           className='text-blue-600'>Luxury</span> & Comfort
          </h1>

          <p className='mt-4 text-lg text-gray-300'>
            Discover premium rooms designed for relaxation, elegance, and unforgettable stays.
          </p>

          {/* Buttons */}
          <div className='mt-8 flex gap-4'>
            <Link 
              to="/booking"
              className='px-6 py-3 rounded-md bg-white text-black font-medium hover:bg-gray-200 transition'
            >
              Book Now
            </Link>

            <Link
              to="/"
              className="px-6 py-3 rounded-md border border-white text-white hover:bg-white hover:text-black transition"
            >
              Explore Rooms
            </Link>
          </div>

        </div>

      </div>

    </section> 
  );
};

export default HeroSection;