import Img from '@/shared/Img';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from '@/shared/Button/NavigationButtons';
import { VERIFICATION_SLICK_SETTING } from '@/utils/constants/slickSliderSettings';
import HeroSection from './sections/HeroSection';
import TabSection from './sections/TopNav';
import ScrollSpy from 'react-ui-scrollspy';
import CostOfStudy from './sections/CostOfStudy';
import Faqs from './sections/Faqs';
import Scholarships from './sections/Scholarships';
import StudyInUk from './sections/StudyInUk';
import UkIntakes from './sections/UkIntakes';
import VisaRequirements from './sections/VisaRequirements';

const Home = () => {
  const destinations = [
    '/images/slide1.png',
    '/images/slide2.png',
    '/images/slide3.png',
    '/images/slide4.png',
  ];
  return (
    <>
      <HeroSection />

      <div className='max-w-[1120px] mx-auto px-5'>
        <TabSection />
        <div className='mt-16 mb-[400px] space-y-12'>
          <ScrollSpy>
            <StudyInUk />
            <VisaRequirements />
            <UkIntakes />
            <CostOfStudy />
            <Scholarships />
            <Faqs />
          </ScrollSpy>
          <div>
            <h4 className='text-[32px] font-semibold mb-4'>
              Explore Other Study Destinations
            </h4>
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
        </div>
      </div>
    </>
  );
};

export default Home;
