import { NextArrow, PrevArrow } from '@/shared/Button/NavigationButtons';
import Img from '@/shared/Img';
import { VERIFICATION_SLICK_SETTING } from '@/utils/constants/slickSliderSettings';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DestinationCard from '../components/DestinationCard';

const ExploreDestinations = () => {
  const destinations = [
    {
      image: '/images/slide1.png',
      icon: '/images/usa.png',
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
      <h4 className='md:text-[32px] text-[28px] font-semibold mb-4'>
        Explore Other Study Destinations
      </h4>
      <div className='sm:flex hidden sm:gap-x-10 gap-x-5 overflow-x-scroll max-w-[1120px]'>
        {destinations?.map((item, idx) => (
          <DestinationCard data={item} key={idx} />
        ))}
      </div>
      <div className='sm:hidden'>
        <Slider
          {...VERIFICATION_SLICK_SETTING}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
        >
          {destinations?.map((item, idx) => (
            <DestinationCard data={item} key={idx} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ExploreDestinations;
