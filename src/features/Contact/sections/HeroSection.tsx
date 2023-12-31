import Img from '@/shared/Img';
import React from 'react';

const HeroSection = () => {
  return (
    <div className='bg-[linear-gradient(97.17deg,#D8E6FD_0%,rgba(216,230,253,0)_99.99%)] sm:p-12 px-5 py-12'>
      <div className='max-w-[1120px] mx-auto md:flex items-center gap-x-10 md:space-y-0 space-y-16 md:justify-between justify-center'>
        <div className='max-w-2xl space-y-6'>
          <h1 className='md:text-5xl text-[40px] font-semibold text-black !leading-[67px]'>
            Admissions closing soon for Jan/Mar 2024 Intakes
          </h1>
          <p className='font-medium md:text-[32px] text-[28px] text-secondary leading-[44px]'>
            Only few seats left at renowned universities of UK and Australia.{' '}
            <br></br>Contact Us Today!
          </p>
        </div>
        <Img
          src={'/images/contactHero.svg'}
          height={456}
          width={366}
          alt='heroImage'
          isLocal
          className='max-h-[456px] max-w-[366px] duration-500 max-[950px]:max-w-[266px] max-[950px]:max-h-[356px] md:mx-0 mx-auto'
        />
      </div>
    </div>
  );
};

export default HeroSection;
