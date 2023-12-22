import Navbar from '@/components/Navbar/Navbar';
import React from 'react';
import HeroSection from './sections/HeroSection';
import BestUniversities from './sections/BestUniversities';
import WhatWeOffer from './sections/WhatWeOffer';
import WhyUs from './sections/WhyUs';
import Countries from './sections/Countries';
import Destinations from './sections/Destinations';
import Testimonials from './sections/Testimonials';

const Home = () => {
  return (
    <div className='mb-[400px]'>
      <Navbar />
      <HeroSection />
      <div className='max-w-[1240px] mx-auto px-5 space-y-32 lg:mt-0 mt-20'>
        <BestUniversities />
        <WhatWeOffer />
      </div>
      <WhyUs />
      <div className='max-w-[1240px] mx-auto px-5 space-y-32'>
        <Countries />
        <Destinations />
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
