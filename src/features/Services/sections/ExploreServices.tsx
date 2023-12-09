import { NextArrow, PrevArrow } from '@/shared/Button/NavigationButtons';
import Img from '@/shared/Img';
import { VERIFICATION_SLICK_SETTING } from '@/utils/constants/slickSliderSettings';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ExploreServices = () => {
  const destinations = [
    '/images/services1.png',
    '/images/services2.png',
    '/images/services3.png',
    '/images/services4.png',
  ];
  return (
    <div>
      <h4 className='text-[32px] font-semibold mb-4'>Explore Other Services</h4>
      <Slider
        {...VERIFICATION_SLICK_SETTING}
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
      >
        {destinations?.map((item) => (
          <Img
            src={item}
            height={240}
            width={300}
            alt='heroImage'
            isLocal
            className='p-4'
          />
        ))}
      </Slider>
    </div>
  );
};

export default ExploreServices;
