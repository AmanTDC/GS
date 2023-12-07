import Accordion from '@/shared/Accordion/Accordion';
import Button from '@/shared/Button/Button';
import Img from '@/shared/Img';
import StatsCard from '@/shared/StatsCard';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from '@/shared/Button/NavigationButtons';
import { VERIFICATION_SLICK_SETTING } from '@/utils/constants/slickSliderSettings';
import HeroSection from './sections/HeroSection';
import TabSection from './sections/TabSection';
import Banner from './sections/Banner';

const Home = () => {
  return (
    <>
      <HeroSection />
      <TabSection />
    </>
  );
};

export default Home;
