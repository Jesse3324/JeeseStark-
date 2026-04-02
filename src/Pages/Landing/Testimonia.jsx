
// import React from 'react'
// import Girl from '../../assets/images/Girl.jpg'
// import Business from '../../assets/images/Business.jpg'
// import Jesse from '../../assets/images/Jesse.jpg'

// const Testimonia = () => {
//   const testimonials = [
//     {
//       name: "Micheal Fernard",
//       time: "2h ago",
//       image: Business,
//       text: "Jessestark hotel and suits has to be the best hotel I've been to, they have the best food and drinks there to keep your day going."
//     },
//     {
//       name: "Precious A",
//       time: "Dec 1, 2025",
//       image: Girl,
//       text: "Recently tried out one of their apartment with my family and I would say it has the best homes."
//     },
//     {
//       name: "GoodLuck Funds",
//       time: "5h ago",
//       image: Jesse,
//       text: "This company is literally one of the best in Nigeria but I think they need to work on their customer service. Anyway nice company."
//     }
//   ]

//   return (
//     <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      
//       {/* Heading */}
//       <div className="max-w-6xl mx-auto text-center mb-10">
//         <h2 className="text-3xl md:text-5xl font-bold capitalize">
//           What our users think
//         </h2>
//         <p className="text-gray-500 mt-2">
//           Real feedback from our amazing customers
//         </p>
//       </div>

//       {/* Testimonials */}
//       <div className="max-w-6xl mx-auto flex flex-nowrap sm:flex-row gap-6 overflow-x-auto sm:overflow-visible px-2 sm:px-0 snap-x">
        
//         {testimonials.map((item, index) => (
//           <div 
//             key={index}
//             className="min-w-[85%] sm:min-w-0 sm:flex-1 bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 snap-center"
//           >
            
//             {/* Top */}
//             <div className="flex items-center gap-3 mb-4">
//               <img 
//                 src={item.image} 
//                 alt="" 
//                 className="w-12 h-12 rounded-full object-cover border"
//               />
//               <div>
//                 <h4 className="font-semibold text-sm">{item.name}</h4>
//                 <span className="text-xs text-gray-400">{item.time}</span>
//               </div>
//             </div>

//             {/* Text */}
//             <p className="text-sm text-gray-600 leading-relaxed">
//               {item.text}
//             </p>

//           </div>
//         ))}

//       </div>
//     </section>
//   )
// }

// export default Testimonia


import React, { useState, useEffect } from 'react'
import Girl from '../../assets/images/Girl.jpg'
import Business from '../../assets/images/Business.jpg'
import Jesse from '../../assets/images/Jesse.jpg'

const Testimonia = () => {
  const [index, setIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const testimonials = [
    {
      name: "Micheal Fernard",
      time: "2h ago",
      image: Business,
      text: "Jessestark hotel and suits has to be the best hotel I've been to, they have the best food and drinks there to keep your day going."
    },
    {
      name: "Precious A",
      time: "Dec 1, 2025",
      image: Girl,
      text: "Recently tried out one of their apartment with my family and I would say it has the best homes."
    },
    {
      name: "GoodLuck Funds",
      time: "5h ago",
      image: Jesse,
      text: "This company is literally one of the best in Nigeria but I think they need to work on their customer service. Anyway nice company."
    }
  ]

  // Detect mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Auto slide (mobile only)
  useEffect(() => {
    if (!isMobile) return

    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % testimonials.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isMobile])

  return (
    <section className="py-16 px-4 ">
      
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold capitalize">
          What our users think
        </h2>
        <p className="text-gray-500 mt-2">
          Real feedback from our amazing customers
        </p>
      </div>

      {/* MOBILE SLIDER */}
      {isMobile ? (
        <div className="relative max-w-sm mx-auto overflow-hidden">

          {/* LEFT ARROW */}
          {/* RIGHT ARROW */}

          {/* SLIDER */}
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((item, i) => (
              <div key={i} className="min-w-full px-2">
                <div className="bg-white p-5 rounded-2xl shadow-md">
                  
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={item.image} 
                      alt="" 
                      className="w-12 h-12 rounded-full object-cover border"
                    />
                    <div>
                      <h4 className="font-semibold text-sm">{item.name}</h4>
                      <span className="text-xs text-gray-400">{item.time}</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.text}
                  </p>

                </div>
              </div>
            ))}
          </div>

        </div>
      ) : (

        /* DESKTOP GRID */
        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={item.image} 
                  alt="" 
                  className="w-12 h-12 rounded-full object-cover border"
                />
                <div>
                  <h4 className="font-semibold text-sm">{item.name}</h4>
                  <span className="text-xs text-gray-400">{item.time}</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.text}
              </p>

            </div>
          ))}
        </div>

      )}

    </section>
  )
}

export default Testimonia