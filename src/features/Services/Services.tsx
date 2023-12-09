import React from 'react';
import HeroSection from './sections/HeroSection';
import StudyInUk from './sections/WhyGs';
import TopNav from './sections/TopNav';
import ScrollSpy from 'react-ui-scrollspy';
import StudyAbroad from './sections/StudyAbroad';
import GetStarted from './sections/GetStarted';
import Faqs from './sections/Faqs';
import ExploreDestinations from './sections/ExploreServices';
import ExploreServices from './sections/ExploreServices';

const Services = () => {
  return (
    <div>
      <HeroSection />
      <div className='max-w-[1120px] mx-auto lg:px-0 px-5'>
        <TopNav />
        <div className='mt-16 mb-40 space-y-12'>
          <ScrollSpy>
            <StudyInUk />
            <StudyAbroad />
            <GetStarted />
            <Faqs />
            <ExploreServices />
          </ScrollSpy>
        </div>
      </div>
    </div>
  );
};

export default Services;
