import Img from '@/shared/Img';
import React from 'react';

const HeroSection = ({ data }: { data: any }) => {
  return (
    <div className='bg-[linear-gradient(98deg,#DBEAFE_0.81%,rgba(219,234,254,0.20)_99.99%)] sm:p-12 px-5 py-12'>
      <div className='max-w-[1120px] mx-auto md:flex items-center gap-x-10 md:space-y-0 space-y-16 md:justify-between justify-center'>
        <div className='max-w-2xl space-y-6'>
          <h1 className='md:text-5xl text-[40px] font-semibold text-black !leading-[67px]'>
            {data?.title[0]}
            <span className='text-blue-600'>{data?.title[1]}</span>
            {data?.title[2]}
          </h1>
          <p className='font-medium text-lg text-black'>{data?.description}</p>
        </div>
        <Img
          src={data?.image}
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
