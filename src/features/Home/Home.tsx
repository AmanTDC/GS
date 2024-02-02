import Navbar from '@/components/Navbar/Navbar';
import React, { useEffect, useState } from 'react';
import HeroSection from './sections/HeroSection';
import BestUniversities from './sections/BestUniversities';
import WhatWeOffer from './sections/WhatWeOffer';
import WhyUs from './sections/WhyUs';
import Countries from './sections/Countries';
import Destinations from './sections/Destinations';
import Testimonials from './sections/Testimonials';
import SuccessModal from '@/components/Modal/SuccessModal';
import RewardModal from '@/components/Modal/RewardModal';
import useScrollHidden from '@/utils/hooks/useScrollHidden';

const Home = () => {
  const [isActive, setIsActive] = useState(-1);

  useScrollHidden(isActive === 0);
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

      {isActive === 0 && (
        <RewardModal
          title={'Get $300 straight to your account!'}
          subTitle='Get started with us for your Study Abroad Journey and get assured  money to kick-start your career'
          styleSubTitle='md:text-2xl font-normal'
          image='/images/onloadPeople.png'
          close={() => setIsActive(-1)}
        />
      )}
    </div>
  );
};

export default Home;
