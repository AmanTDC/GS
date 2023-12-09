import React from 'react';
import HeroSection from './sections/HeroSection';
import ScrollSpy from 'react-ui-scrollspy';
import CostOfStudy from './sections/CostOfStudy';
import Faqs from './sections/Faqs';
import Scholarships from './sections/Scholarships';
import StudyInUk from './sections/StudyInUk';
import UkIntakes from './sections/UkIntakes';
import VisaRequirements from './sections/VisaRequirements';
import TopNav from './sections/TopNav';
import ExploreDestinations from './sections/ExploreDestinations';

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className='max-w-[1120px] mx-auto px-5 mb-[400px]'>
        <TopNav />
        <div className='mt-16 space-y-12'>
          <ScrollSpy>
            <StudyInUk />
            <VisaRequirements />
            <UkIntakes />
            <CostOfStudy />
            <Scholarships />
            <Faqs />
          </ScrollSpy>
        </div>
        <ExploreDestinations />
      </div>
    </>
  );
};

export default Home;
