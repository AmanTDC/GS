import { NextArrow, PrevArrow } from '@/shared/Button/NavigationButtons';
import Img from '@/shared/Img';
import { VERIFICATION_SLICK_SETTING } from '@/utils/constants/slickSliderSettings';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ExploreServicesCard from '../components/ExploreServicesCard';

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
      <div className='sm:flex hidden sm:gap-x-10 gap-x-5 overflow-x-scroll max-w-[1120px]'>
        {destinations?.map((item, idx) => (
          <ExploreServicesCard data={item} key={idx} />
        ))}
      </div>
      <div className='sm:hidden'>
        <Slider
          {...VERIFICATION_SLICK_SETTING}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
        >
          {destinations?.map((item, idx) => (
            <ExploreServicesCard data={item} key={idx} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ExploreServices;
