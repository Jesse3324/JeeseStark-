import React from 'react'
import { Link } from 'react-router-dom'
import Luxury from '../../assets/images/Luxury.jpg'
import Beauty from '../../assets/images/Beauty.jpg'
import Jesses from '../../assets/images/Jesses.jpg'

const AboutSection = () => {
  return (
    <section class="bg-stone-50 py-20 px-6 md:px-12 lg:px-24">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-20">
      <span class="uppercase tracking-[0.3em] text-sm text-stone-500 mb-4 block">Established 2012</span>
      <h2 class="text-4xl md:text-6xl font-serif text-stone-900 leading-tight">
        The Art of <span class="italic text-stone-600 text-3xl md:text-5xl">Foundation</span> Hospitality
      </h2>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      <div class="relative group">
        <div class="aspect-[4/5] overflow-hidden shadow-2xl">
          <img src={Luxury} 
               alt="Luxury Lobby" 
               class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        </div>
        <div class="hidden md:block absolute -bottom-10 -right-10 w-64 h-80 border-[12px] border-white shadow-xl overflow-hidden">
             <img src={Beauty} 
                  alt="Detail shot" 
                  class="w-full h-full object-cover" />
        </div>
      </div>

      <div class="space-y-8 lg:pl-12">
        <h3 class="text-2xl font-serif text-stone-800">Where History Meets High Sophistication</h3>
        
        <div class="space-y-6 text-stone-600 leading-relaxed font-light text-lg">
          <p>
            Founded over a Decade  ago, <span class="font-medium text-stone-900 underline decoration-stone-300 underline-offset-4">JesseStark Hotel</span> was born from a singular vision: to create a sanctuary where the grandeur of the past meets the effortless luxury of the present.
          </p>
          <p>
            Every architectural detail, from the hand-carved cornices to the reclaimed marble floors, tells a story of uncompromising craftsmanship. Here, we don't just offer service; we practice the art of anticipation, ensuring that every guest feels like the protagonist of their own timeless narrative.
          </p>
        </div>

        <div class="pt-8 border-t border-stone-200 flex items-center space-x-6">
          <div class="w-16 h-16 rounded-full bg-stone-200 overflow-hidden">
             <img src={Jesses} alt="Founder" class="w-full h-full object-cover grayscale" />
          </div>
          <div>
            <p class="font-serif italic text-xl text-stone-900">Jesse Oyinbrakumo Erebulu</p>
            <p class="text-xs uppercase tracking-widest text-stone-500">General Manager & C.E.O</p>
          </div>
        </div>

        <div class="pt-6">
          <a href="#" class="inline-block border-b border-stone-900 pb-2 text-stone-900 uppercase tracking-widest text-sm hover:text-stone-500 hover:border-stone-500 transition-colors duration-300">
            Begin Your Journey &rarr;
          </a>
        </div>
      </div>

    </div>
  </div>
</section>
  )
}

export default AboutSection


{/* <section class="bg-stone-50 py-20 px-6 md:px-12 lg:px-24">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-20">
      <span class="uppercase tracking-[0.3em] text-sm text-stone-500 mb-4 block">Established 1924</span>
      <h2 class="text-4xl md:text-6xl font-serif text-stone-900 leading-tight">
        The Art of <span class="italic text-stone-600 text-3xl md:text-5xl">Bespoke</span> Hospitality
      </h2>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      <div class="relative group">
        <div class="aspect-[4/5] overflow-hidden shadow-2xl">
          <img src={Luxury} 
               alt="Luxury Lobby" 
               class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        </div>
        <div class="hidden md:block absolute -bottom-10 -right-10 w-64 h-80 border-[12px] border-white shadow-xl overflow-hidden">
             <img src={Beauty} 
                  alt="Detail shot" 
                  class="w-full h-full object-cover" />
        </div>
      </div>

      <div class="space-y-8 lg:pl-12">
        <h3 class="text-2xl font-serif text-stone-800">Where History Meets High Sophistication</h3>
        
        <div class="space-y-6 text-stone-600 leading-relaxed font-light text-lg">
          <p>
            Founded over a century ago, <span class="font-medium text-stone-900 underline decoration-stone-300 underline-offset-4">The Grand Reserve</span> was born from a singular vision: to create a sanctuary where the grandeur of the past meets the effortless luxury of the present.
          </p>
          <p>
            Every architectural detail, from the hand-carved cornices to the reclaimed marble floors, tells a story of uncompromising craftsmanship. Here, we don't just offer service; we practice the art of anticipation, ensuring that every guest feels like the protagonist of their own timeless narrative.
          </p>
        </div>

        <div class="pt-8 border-t border-stone-200 flex items-center space-x-6">
          <div class="w-16 h-16 rounded-full bg-stone-200 overflow-hidden">
             <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" alt="Founder" class="w-full h-full object-cover grayscale" />
          </div>
          <div>
            <p class="font-serif italic text-xl text-stone-900">Julian Saint-Clair</p>
            <p class="text-xs uppercase tracking-widest text-stone-500">General Manager & Custodian</p>
          </div>
        </div>

        <div class="pt-6">
          <a href="#" class="inline-block border-b border-stone-900 pb-2 text-stone-900 uppercase tracking-widest text-sm hover:text-stone-500 hover:border-stone-500 transition-colors duration-300">
            Begin Your Journey &rarr;
          </a>
        </div>
      </div>

    </div>
  </div>
</section> */}