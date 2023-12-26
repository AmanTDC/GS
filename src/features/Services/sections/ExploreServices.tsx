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
      <h4 className='md:text-[32px] text-[28px] font-semibold mb-4'>
        Explore Other Services
      </h4>
      {/* <Slider
        {...VERIFICATION_SLICK_SETTING}
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
      > */}
      <div className='flex sm:gap-x-10 gap-x-5 overflow-x-scroll max-w-[1120px]'>
        {destinations?.map((item, idx) => (
          <div key={idx} className='relative max-w-[300px]'>
            <div className='z-10 h-[240px] w-[300px] rounded-2xl bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_59.37%,#000_100%)] absolute' />
            <Img
              src={item?.image}
              height={240}
              width={300}
              alt='heroImage'
              isLocal
              className='max-w-[300px] h-[240px] rounded-2xl'
            />
            <h4 className='text-[#fafafa] bottom-4 left-4 z-20 font-medium absolute'>
              {item?.name}
            </h4>
          </div>
        ))}
      </div>
      {/* </Slider> */}
    </div>
  );
};

export default ExploreServices;
