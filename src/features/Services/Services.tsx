import React from 'react';
import HeroSection from './sections/HeroSection';
import WhyGs from './sections/WhyGs';
import TopNav from './sections/TopNav';
import ScrollSpy from 'react-ui-scrollspy';
import WhatToExpect from './sections/WhatToExpect';
import GetStarted from './sections/GetStarted';
import Faqs from './sections/Faqs';
import ExploreServices from './sections/ExploreServices';
import HowToApply from './sections/HowToApply';

const Services = ({ data }: { data: any }) => {
  return (
    <>
      <HeroSection data={data?.heroSection} />
      <div className='max-w-[1120px] mx-auto lg:px-0 px-5'>
        <TopNav isHowToApply={data?.howToApply ? true : false} />
        <div className='mt-16 mb-40 space-y-12'>
          <ScrollSpy>
            <WhyGs index='1' />
            {data?.whatToExpect && (
              <WhatToExpect data={data?.whatToExpect} index='2' />
            )}
            <GetStarted index='3' />
            {data?.howToApply && (
              <HowToApply data={data?.howToApply} index='4' />
            )}
            <Faqs index='5' />
          </ScrollSpy>
          <ExploreServices />
        </div>
      </div>
    </>
  );
};

export default Services;
