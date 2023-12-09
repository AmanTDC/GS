import { NextArrow, PrevArrow } from '@/shared/Button/NavigationButtons';
import Img from '@/shared/Img';
import { VERIFICATION_SLICK_SETTING } from '@/utils/constants/slickSliderSettings';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ExploreServices = () => {
  const destinations = [
    { image: '/images/services1.png', name: 'Study Abroad Counselling' },
    { image: '/images/services2.png', name: 'Visa Application Assistance' },
    { image: '/images/services3.png', name: 'Scholarship Assistance' },
    { image: '/images/services4.png', name: 'Student Accomodation' },
  ];
  return (
    <div>
      <h4 className='text-[32px] font-semibold mb-4'>Explore Other Services</h4>
      <Slider
        {...VERIFICATION_SLICK_SETTING}
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
      >
        {destinations?.map((item, idx) => (
          <div key={idx} className='relative'>
            <Img
              src={item?.image}
              height={240}
              width={300}
              alt='heroImage'
              isLocal
              className='p-4'
            />
            <h4 className='text-[#fafafa] bottom-6 left-7 font-medium absolute'>
              {item?.name}
            </h4>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ExploreServices;
