import React from 'react';
import HeroSection from './sections/HeroSection';
import ScrollSpy from 'react-ui-scrollspy';
import CostOfStudy from './sections/CostOfStudy';
import Faqs from './sections/Faqs';
import Scholarships from './sections/LivingExpenses';
import StudyIn from './sections/StudyIn';
import Intakes from './sections/Intakes';
import VisaRequirements from './sections/VisaRequirements';
import TopNav from './sections/TopNav';
import ExploreDestinations from './sections/ExploreDestinations';
import LivingExpenses from './sections/LivingExpenses';
import CareerOpportunity from './sections/CareerOpportunity';

const Destinations = ({ data, router }: { data: any; router: any }) => {
  return (
    <>
      <HeroSection country={data?.country} image={data?.heroImage} />
      <div className='max-w-[1120px] mx-auto px-5 mb-[400px]'>
        <TopNav countryName={router?.query?.index} />
        <div className='mt-16 space-y-12'>
          <ScrollSpy>
            {data?.studyIn && (
              <StudyIn data={data?.studyIn} country={data?.country} index='1' />
            )}
            {data?.visaRequirements && (
              <VisaRequirements data={data?.visaRequirements} index='2' />
            )}
            {data?.scholarships && (
              <Scholarships data={data?.scholarships} index='3' />
            )}
            {data?.intakes && (
              <Intakes
                data={data?.intakes}
                countryName={router?.query?.index}
                index='4'
              />
            )}
            {data?.costOfStudy && (
              <CostOfStudy data={data?.costOfStudy} index='5' />
            )}
            {data?.livingExpenses && (
              <LivingExpenses data={data?.livingExpenses} index='6' />
            )}
            {data?.careerOpportunity && (
              <CareerOpportunity data={data?.careerOpportunity} index='7' />
            )}

            {data?.faqs && <Faqs data={data?.faqs} index='8' />}
          </ScrollSpy>
        </div>
        <ExploreDestinations />
      </div>
    </>
  );
};

export default Destinations;
