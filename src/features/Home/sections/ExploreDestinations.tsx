import { NextArrow, PrevArrow } from '@/shared/Button/NavigationButtons';
import Img from '@/shared/Img';
import { VERIFICATION_SLICK_SETTING } from '@/utils/constants/slickSliderSettings';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ExploreDestinations = () => {
  const destinations = [
    {
      image: '/images/slide1.png',
      icon: '/images/us.png',
      country: 'The United States',
    },
    {
      image: '/images/slide2.png',
      icon: '/images/uk.png',
      country: 'The United Kingdom',
    },
    {
      image: '/images/slide3.png',
      icon: '/images/canada.png',
      country: 'Canada',
    },
    {
      image: '/images/slide4.png',
      icon: '/images/australia.png',
      country: 'Australia',
    },
  ];
  return (
    <div>
      <h4 className='text-[32px] font-semibold mb-4'>
        Explore Other Study Destinations
      </h4>
      <Slider
        {...VERIFICATION_SLICK_SETTING}
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
      >
        {destinations?.map((item, idx) => (
          <div key={idx} className='relative max-w-[300px] mb-4'>
            <Img
              src={item?.image}
              height={240}
              width={300}
              alt='heroImage'
              isLocal
              className='p-1'
            />
            <div className='flex items-center gap-x-3 bottom-6 left-7 absolute'>
              <Img
                src={item?.icon}
                height={32}
                width={32}
                alt='heroImage'
                isLocal
              />
              <div className=''>
                <div className='font-medium text-xs text-[#fafafa]'>
                  Study in
                </div>
                <h4 className='text-[#fafafa] font-medium'>{item?.country}</h4>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ExploreDestinations;
