import Img from '@/shared/Img';
import StatsCard from '@/shared/StatsCard';
import { STATS_SECTION } from '@/utils/constants/slickSliderSettings';
import React from 'react';
import Slider from 'react-slick';

const HeroSection = () => {
  const statsCard = [
    {
      icon: '/icons/partner.png',
      title: '280+',
      subTitle: 'Partner Universities',
    },
    {
      icon: '/icons/money.png',
      title: '£9250 - £63.9K',
      subTitle: 'Annual Tuition Fees',
    },
    {
      icon: '/icons/students.png',
      title: '400k+',
      subTitle: 'International Students',
    },
    {
      icon: '/icons/visas.png',
      title: '2 Years',
      subTitle: 'Post Study Work Visas',
    },
  ];
  return (
    <div className='bg-[linear-gradient(97.87deg,#F0FDF4_0.87%,rgba(240,_253,_244,_0.2)_99.3%)] sm:p-12 px-5 py-12'>
      <div className='max-w-[1120px] mx-auto md:flex items-center gap-x-10 md:space-y-0 space-y-16 md:justify-between justify-center'>
        <div className='max-w-2xl space-y-6'>
          <h1 className='text-5xl font-semibold text-black leading-[67px]'>
            Free <span className='text-green-500'>Study Abroad Counseling</span>{' '}
            - Your Path to Global Education
          </h1>
          <p className='font-medium text-lg text-black'>
            At GlobalScholar, our mission is to guide you on a journey that
            transcends borders and opens doors to a world of opportunities. With
            our FREE Study Abroad Counseling service, we are your trusted
            partner in making your dreams of studying abroad a reality.
          </p>
        </div>
        <Img
          src={'/images/servicesHero.svg'}
          height={456}
          width={366}
          alt='heroImage'
          isLocal
          className='max-h-[456px] max-w-[366px] duration-500 max-[950px]:max-w-[266px] max-[950px]:max-h-[356px] md:mx-0 mx-auto'
        />
      </div>
    </div>
  );
};

export default HeroSection;
