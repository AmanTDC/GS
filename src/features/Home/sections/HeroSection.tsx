import Img from '@/shared/Img';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-[url('/images/homeBg.png')] lg:bg-[length:90%_100vh] bg-[length:200%_90%] xl:h-[900px] lg:h-screen h-fit w-full bg-no-repeat">
      <div className='flex lg:flex-row flex-col lg:space-y-0 space-y-4 sm:pt-28 pt-24 lg:justify-between lg:space-x-10 max-w-[1240px] md:mx-auto px-5'>
        <div className='text-white md:max-w-[644px] sm:max-w-[calc(100%-80px)]'>
          <div className='text-xl font-medium sm:block hidden'>
            Welcome to Global Scholar 👋
          </div>
          <div className='md:text-5xl sm:text-4xl text-[32px] font-semibold sm:!leading-[67px] leading-[50px] my-4'>
            Study Abroad With Reward: Your Global Future Awaits
          </div>
          <div className='sm:text-xl text-sm font-medium mt-2'>
            Unlock Boundless Opportunities, Explore World-Class Universities,
            and Achieve Your Dreams Abroad
          </div>
          <div className='rounded-full w-full bg-white flex items-center relative sm:h-16 h-10 my-8'>
            <input
              placeholder='Enter Your Email'
              className='text-gray-400 sm:text-base text-sm rounded-full font-medium sm:mr-[220px] mr-16 w-full bg-white outline-none sm:h-16 h-10 p-5 pl-6'
            />
            <div className='flex items-center justify-center cursor-pointer text-white gap-x-3 sm:p-5 absolute bg-[rgba(30,58,138,1)] hover:bg-[rgba(30,58,138,1)]/90 duration-500 sm:h-12 h-8 max-[640px]:w-8 rounded-full sm:right-2 right-1'>
              <Img
                src='/icons/claimNow.png'
                alt='send'
                height={24}
                width={24}
                isLocal
                className='max-[640px]:h-[18px] max-[640px]:w-[18px]'
              />
              <h4 className='text-sm font-medium sm:block hidden'>
                Claim 300$ Now
              </h4>
            </div>
          </div>
          <div className='flex max-[450px]flex-col max-[450px]:items-start font-semibold items-center gap-8'>
            <div>
              <div className='md:text-[32px] text-[24px]'>₹5,00,00</div>
              <div className='sm:text-xl text-sm'>Scholarships</div>
            </div>
            <div className='w-[1px] h-12 bg-white/50 max-[450px]:hidden' />
            <div>
              <div className='md:text-[32px] text-[24px]'>5000+</div>
              <div className='sm:text-xl text-sm'>
                Learners On-Campus Abroad
              </div>
            </div>
          </div>
        </div>
        <Img
          src={'/images/homeHero.png'}
          height={528}
          width={470}
          alt='heroImage'
          isLocal
          className='mx-auto sm:px-0 px-5'
        />
      </div>
    </div>
  );
};

export default HeroSection;
