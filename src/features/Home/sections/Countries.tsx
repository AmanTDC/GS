import { NextArrow, PrevArrow } from '@/shared/Button/NavigationButtons';
import Img from '@/shared/Img';
import { VERIFICATION_SLICK_SETTING } from '@/utils/constants/slickSliderSettings';
import React from 'react';
import { useRouter } from 'next/router';
import CountryCard from '../components/CountryCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Countries = () => {
  const countries = [
    {
      name: 'UK',
      icon: '/images/uk.png',
      image: '/images/country1.png',
      route: '/uk',
    },
    {
      name: 'Australia',
      icon: '/images/australia.png',
      image: '/images/country2.png',
      route: '/australia',
    },
    {
      name: 'Canada',
      icon: '/images/canada.png',
      image: '/images/country3.png',
      route: '/canada',
    },
    {
      name: 'USA',
      icon: '/images/usa.png',
      image: '/images/country4.png',
      route: '/usa',
    },
    {
      name: 'Ireland',
      icon: '/images/ireland.png',
      image: '/images/country5.png',
      route: '/ireland',
    },
    {
      name: 'NewZealand',
      icon: '/images/nz.png',
      image: '/images/country6.png',
      route: '/nz',
    },
  ];
  const router = useRouter();
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
      <div className='sm:gap-x-10 gap-x-5 overflow-x-scroll max-w-[1120px] sm:hidden flex'>
        {countries?.map((item, idx) => (
          <CountryCard
            data={item}
            onclick={() => router.push(item?.route)}
            key={idx}
          />
        ))}
      </div>
      <div className='sm:block hidden'>
        <Slider
          {...VERIFICATION_SLICK_SETTING}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
        >
          {countries?.map((item, idx) => (
            <CountryCard
              data={item}
              onclick={() => router.push(item?.route)}
              key={idx}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Countries;
