import React from 'react'
import HeroSection from './HeroSection';
import Ourservices from './Ourservices';
import AboutSection from './AboutSection';
import Testimonia from './Testimonia';
import BookingSection from './BookingSection';


const LandingPage = () => {
  return (
    <div>
    <HeroSection />
    <Ourservices />
    <AboutSection />
    <BookingSection />
    <Testimonia />
    </div>
  )
}

export default LandingPage