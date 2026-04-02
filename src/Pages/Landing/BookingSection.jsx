// import React from 'react'
// import { Link } from 'react-router-dom'

// const BookingSection = () => {
//   return (
//     <section className="w-full bg-blue-800 py-16 px-4">
//         <Link to="/booking">
//       <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">
        
//         <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
//           Book Your Stay
//         </h2>


//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

//           {/* Location */}
//           <div className="flex flex-col">
//             <label className="text-sm text-gray-500 mb-1">Location</label>
//             <input
//               type="text"
//               placeholder="Where are you going?"
//               className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
//             />
//           </div>

//           {/* Check-in */}
//           <div className="flex flex-col">
//             <label className="text-sm text-gray-500 mb-1">Check-in</label>
//             <input
//               type="date"
//               className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
//             />
//           </div>

//           {/* Check-out */}
//           <div className="flex flex-col">
//             <label className="text-sm text-gray-500 mb-1">Check-out</label>
//             <input
//               type="date"
//               className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
//             />
//           </div>

//           {/* Guests */}
//           <div className="flex flex-col">
//             <label className="text-sm text-gray-500 mb-1">Guests</label>
//             <select className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black">
//               <option>1 Guest</option>
//               <option>2 Guests</option>
//               <option>3 Guests</option>
//               <option>4+ Guests</option>
//             </select>
//           </div>
//         </div>

//         <div className='flex flex-col'>
//             <label className='text-sm text-gray-500 mb-1'>
//                 Hotel class
//             </label>
//             <input type="text" 
//             placeholder='what class you prefer?' 
//             className='border rounded- px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black'/>

//         </div>

//         {/* Button */}
//         <div className="mt-6">
//           <button className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition">
//             Check Availability
//           </button>
//         </div>

//       </div>
//       </Link>
//     </section>
//   )
// }

// export default BookingSection


// import React from 'react'
// import { Link } from 'react-router-dom'

// const BookingSection = () => {
//   return (
//     <section className="w-full bg-gradient-to-r from-[#1D3557] to-[#457B9D] py-20 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12">
          
//           <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#1D3557] mb-10">
//             Book Your Stay
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            
//             {/* Location */}
//             <div className="flex flex-col">
//               <label className="text-sm text-gray-600 mb-2 font-medium">Location</label>
//               <input
//                 type="text"
//                 placeholder="Where are you going?"
//                 className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E9C46A] transition"
//               />
//             </div>

//             {/* Check-in */}
//             <div className="flex flex-col">
//               <label className="text-sm text-gray-600 mb-2 font-medium">Check-in</label>
//               <input
//                 type="date"
//                 className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E9C46A] transition"
//               />
//             </div>

//             {/* Check-out */}
//             <div className="flex flex-col">
//               <label className="text-sm text-gray-600 mb-2 font-medium">Check-out</label>
//               <input
//                 type="date"
//                 className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E9C46A] transition"
//               />
//             </div>

//             {/* Guests */}
//             <div className="flex flex-col">
//               <label className="text-sm text-gray-600 mb-2 font-medium">Guests</label>
//               <select className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E9C46A] transition">
//                 <option>1 Guest</option>
//                 <option>2 Guests</option>
//                 <option>3 Guests</option>
//                 <option>4+ Guests</option>
//               </select>
//             </div>
//           </div>

//           {/* Hotel Class */}
//           <div className="flex flex-col mb-6">
//             <label className="text-sm text-gray-600 mb-2 font-medium">Hotel Class</label>
//             <input 
//               type="text" 
//               placeholder="What class you prefer?" 
//               className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E9C46A] transition"
//             />
//           </div>

//           {/* Button */}
//           <div>
//             <Link to="/booking">
//               <button className="w-full bg-[#E9C46A] text-[#1D3557] font-bold py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform">
//                 Check Availability
//               </button>
//             </Link>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }

// export default BookingSection



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
              <select className="bg-white/10 border border-white/30 text-black rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition">
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