import React from 'react'
import { Link } from 'react-router-dom'
import Room from '../../assets/images/Room.jpg';
import Building from '../../assets/images/modernhouse.jpg';

const Ourservices = () => {
  return (
    <section>
    <div>
      {/* Section Header */}
      <Link to="/services">
      <div className='text-center mb-12 mt-12'>
      <h2 className='text-3xl md:text-4xl font-bold'>
        Our Services
      </h2>
      <p className='mt-4 text-gray-600 max-w-2xl mx-auto'>
        Analyze on our main Services designed to meet your everyday needs
      </p>
      </div>
      </Link>

      {/* Service Cards */}
      <div className='px-4 md:px-0'>
      <div className='flex flex-col md:flex-row gap-8 justify-center'>

        <Link to="/Car" className='flex-1 max-w-md bg-gray-200 border rounded-xl overflow-hidden shadows-sm hover:shadow-md transition hover:-translate-y-1'>
        <div className='p-10 text-center'>
          <h3 className='text-xl font-semibold text-[var(--primary color)] mb-4'>
            Room booking services
            </h3>
        </div>

        <div className='h-56 w-full flex items-center justify-center bg-white p-4'>
          <img src={Room} alt="" className='w-full h-full object-cover rounded-xl'/>
        </div>
        </Link>

          <Link to="/Real-estate" className='flex-1 max-w-md bg-gray-200 border rounded-xl overflow-hidden shadows-sm hover:shadow-md transition hover:-translate-y-1'>
        <div className='p-10 text-center'>
          <h3 className='text-xl font-semibold text-[var(--primary color)] mb-4'>
            House-rental Service
            </h3>
        </div>

        <div className='h-56 w-full flex items-center justify-center bg-white p-4'>
          <img src={Building} alt="" className='w-full h-full object-cover rounded-xl'/>
        </div>
        </Link>
        
    
      </div>
     </div>
     </div>
    </section>
  )
}

export default Ourservices