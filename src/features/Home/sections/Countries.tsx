import { NextArrow, PrevArrow } from '@/shared/Button/NavigationButtons';
import Img from '@/shared/Img';
import { VERIFICATION_SLICK_SETTING } from '@/utils/constants/slickSliderSettings';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Countries = () => {
  const countries = [
    {
      name: 'UK',
      icon: '/images/uk.png',
      image: '/images/country1.png',
    },
    {
      name: 'Australia',
      icon: '/images/australia.png',
      image: '/images/country2.png',
    },
    {
      name: 'Canada',
      icon: '/images/canada.png',
      image: '/images/country3.png',
    },
    {
      name: 'USA',
      icon: '/images/us.png',
      image: '/images/country4.png',
    },
    {
      name: 'Ireland',
      icon: '/images/ireland.png',
      image: '/images/country5.png',
    },
    {
      name: 'NewZealand',
      icon: '/images/nz.png',
      image: '/images/country6.png',
    },
  ];
  return (
    <div className='space-y-12'>
      <div className='font-semibold text-center'>
        <div className='text-blue-500 w-fit mx-auto bg-blue-50 px-4 py-2 mb-2 rounded-lg'>
          COUNTRIES
        </div>
        <div className='text-[32px] md:text-[40px] max-w-[530px] mx-auto'>
          Explore & Learn More About Study Destinations
        </div>
      </div>
      <Slider
        {...VERIFICATION_SLICK_SETTING}
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
      >
        {countries?.map((item, idx) => (
          <div key={idx} className='relative w-[362px] group mb-16'>
            <Img
              src={item?.image}
              height={420}
              width={362}
              alt='heroImage'
              isLocal
              className='max-h-[420px] rounded-2xl'
            />
            <div className='bg-[linear-gradient(180deg,rgba(30,58,138,0.00)_0%,#1E3A8A_91.32%)] h-full w-full rounded-2xl absolute opacity-0 group-hover:opacity-100 group-hover:top-0 top-[-100%] duration-500'>
              <div className='text-white h-full flex justify-center items-center text-[45px] font-semibold'>
                {item?.name}
              </div>
            </div>
            <div className='h-[92px] absolute -bottom-10 left-[37%] w-[92px] rounded-full bg-white flex items-center justify-center'>
              <Img
                src={item?.icon}
                height={86}
                width={86}
                alt='heroImage'
                isLocal
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Countries;
