import React from 'react'
import { Link } from 'react-router-dom'
import Hotel from '../../assets/images/Hotel.png';
import Earth from '../../assets/images/Earth.webp'
// const HeroSection = () => {
//   return (
//     <section className='min-h-[80vh] flex items-center bg-white'>
//       <div className='max-W-7Xl mx-auto px-4 w-full'>
//         <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>

//         {/* IMAGE-shows first on mobile */}

//         <div className='order-1 md:order-2 flex justify-center'>
//           <img src={Hotel} alt="App Preview" className='rounded-xl w-full max-w-md' />

//         </div>

//         {/* TEXT-shows under image on mobile */}
        
//         <div className='order-2 md:order-1 text-gray-900'>
//           <h1 className='text-3xl md:text-5xl lg:text-5xl font-bold leading-tight'>
//             Book a room with your families and friends in our hotel
//           </h1>

//           <div className='mt-8 flex gap-4'>
//             <Link 
//             to="/booking" className='px-6 py-3 rounded-md bg-[var(--primary-color)] text-white font-medium hover:opacity-90'>
//               Book a room
//             </Link>

//             <Link
//             to="/" className="px-6 py-3 rounded-md border-gray-900 text-gray-900 hover:bg-blue-800 hover:text-white transition">
//               Learn More
//             </Link>
//           </div>
//         </div>

//         </div>
//       </div>
//     </section> 
//   );
// };

// export default HeroSection;



const HeroSection = () => {
  return (
    <section className='relative min-h-[80vh] flex items-center overflow-hidden'>

      {/* 🖼️ Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${Earth})` }}
      ></div>

      {/* 🌑 Overlay */}
      <div className='absolute inset-0 bg-black/50'></div>

      {/* 📦 Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 w-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>

          {/* IMAGE (still showing) */}
          <div className='order-1 md:order-2 flex justify-center'>
            <img
              src={Hotel}
              alt="App Preview"
              className='rounded-xl w-full max-w-md shadow-lg'
            />
          </div>

          {/* TEXT */}
          <div className='order-2 md:order-1 text-white'>
            <h1 className='text-3xl md:text-5xl lg:text-5xl font-bold leading-tight'>
              Book a room with your families and friends in our hotel
            </h1>

            <div className='mt-8 flex gap-4'>
              <Link 
                to="/booking"
                className='px-6 py-3 rounded-md bg-[var(--primary-color)] text-white font-medium hover:opacity-90'
              >
                Book a room
              </Link>

              <Link
                to="/"
                className="px-6 py-3 rounded-md border border-white text-white hover:bg-blue-800 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

        </div>
      </div>

    </section> 
  );
};

export default HeroSection;