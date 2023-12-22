import Img from '@/shared/Img';
import { STATS_SECTION } from '@/utils/constants/slickSliderSettings';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BestUniversities = () => {
  const Universities = [
    '/images/homeSlider1.png',
    '/images/homeSlider2.png',
    '/images/homeSlider3.png',
    '/images/homeSlider4.png',
    '/images/homeSlider5.png',
  ];
  return (
    <div className='font-semibold text-center'>
      <div className='text-blue-500 w-fit mx-auto bg-blue-50 px-4 py-2 mb-2 rounded-lg'>
        5000+ TOP UNIVERSITIES
      </div>
      <div className='text-[32px] md:text-[40px] text-black mb-9'>
        Enroll in the Best Universities Around the Globe
      </div>
      <Slider {...STATS_SECTION} centerMode>
        {Universities?.map((item, idx) => (
          <Img
            src={item}
            height={48}
            width={200}
            alt='heroImage'
            isLocal
            key={idx}
            className='h-12 !w-fit max-w[200px]'
          />
        ))}
      </Slider>
    </div>
  );
};

export default BestUniversities;
