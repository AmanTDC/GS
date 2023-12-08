import Img from '@/shared/Img';
import React from 'react';

const Banner = () => {
  return (
    <div className='rounded-3xl lg:justify-between gap-8 items-center flex lg:flex-row flex-col bg-blue-500 -mt-[270px] lg:px-10 lg:pl-14 mx-10 z-10 mb-16'>
      <Img
        src={'/images/banner.png'}
        height={357}
        width={361}
        alt='heroImage'
        isLocal
        className='-mt-10 max-[1100px]:w-[300px] max-[1100px]:h-[296px]'
      />
      <div className='space-y-4 max-w-[591px] w-full py-6 md:px-0 px-4'>
        <h4 className='text-[32px] text-[#fafafa] font-semibold max-w-[500px]'>
          Ready to Transform Your Career? Take the First Step Today
        </h4>
        <p className='text-lg text-[#F9FAFB] font-medium'>
          Creating smart, secure and stylish workplaces worldwide.
        </p>
        <div className='rounded-full w-full bg-white flex items-center relative h-16'>
          <input
            placeholder='Enter Your Email Address'
            className='text-gray-400 rounded-full font-medium sm:w-2/3 bg-white outline-none h-16 p-5 pl-6'
          />
          <div className='flex items-center cursor-pointer text-white gap-x-3 p-5 absolute bg-[rgba(30,58,138,1)] hover:bg-[rgba(30,58,138,1)]/90 duration-500 h-12 rounded-full right-2'>
            <Img
              src='/icons/send.png'
              alt='send'
              height={24}
              width={24}
              isLocal
            />
            <h4 className='text-sm font-medium'>Get Free Consultation</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
