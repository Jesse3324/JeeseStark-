import React from 'react'
import { Link } from 'react-router-dom'

const BookingSection = () => {
  return (
    <section className="w-full bg-[#0B1D2D] py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Glassy Container */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 md:p-12">
          
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#FFD700] mb-12 tracking-wide">
            Book Your Luxury Stay
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

            {/* Location */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-300 mb-2 font-semibold uppercase">Location</label>
              <input
                type="text"
                placeholder="Where are you going?"
                className="bg-white/10 border border-white/30 text-white placeholder-gray-400 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition"
              />
            </div>

            {/* Check-in */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-300 mb-2 font-semibold uppercase">Check-in</label>
              <input
                type="date"
                className="bg-white/10 border border-white/30 text-white rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition"
              />
            </div>

            {/* Check-out */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-300 mb-2 font-semibold uppercase">Check-out</label>
              <input
                type="date"
                className="bg-white/10 border border-white/30 text-white rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition"
              />
            </div>

            {/* Guests */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-300 mb-2 font-semibold uppercase">Guests</label>
              <select className="bg-black/10 border border-black text-white rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
              </select>
            </div>
          </div>

          {/* Hotel Class */}
          <div className="flex flex-col mb-8">
            <label className="text-sm text-gray-300 mb-2 font-semibold uppercase">Hotel Class</label>
            <input 
              type="text" 
              placeholder="What class you prefer?" 
              className="bg-white/10 border border-white/30 text-white rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition"
            />
          </div>

          {/* Button */}
          <div className="text-center">
            <Link to="/booking">
              <button className="bg-[#FFD700] text-[#0B1D2D] font-bold py-4 px-10 rounded-3xl shadow-xl hover:scale-105 hover:shadow-2xl transition transform text-lg">
                Check Availability
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default BookingSection