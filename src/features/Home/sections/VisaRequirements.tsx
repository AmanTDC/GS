import { NextArrow, PrevArrow } from '@/shared/Button/NavigationButtons';
import { VERIFICATION_SLICK_SETTING } from '@/utils/constants/slickSliderSettings';
import React from 'react';
import Slider from 'react-slick';

const VisaRequirements = () => {
  return (
    <div id='second' className='space-y-3 my-16'>
      <h4 className='text-[32px] font-semibold'>Student Visa Requirements</h4>
      <p className='text-secondary pb-3'>
        Welcome to the UK - home to over 500,000 international students each
        year. Study at pioneering universities and gain skills that top global
        employers seek. Experience the culture that shaped the modern world.
        Join a diverse community of changemakers.
      </p>
      <Slider
        {...VERIFICATION_SLICK_SETTING}
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
      >
        {[1, 1, 1, 1]?.map((item) => (
          <div className='bg-gray-50 border border-gray-200 p-4 space-y-4 rounded-lg max-w-[320px] mb-4'>
            <h4 className='text-black font-semibold text-lg'>
              1. Short-Term Study
            </h4>
            <div className='h-[1px] bg-gray-200'></div>
            <div className='space-y-2'>
              <div className='text-blue-500 text-xs'>WHO’S IT FOR</div>
              <div className='text-black text-sm'>Short-term students</div>
            </div>
            <div className='space-y-2'>
              <div className='text-blue-500 text-xs'>COST</div>
              <div className='text-black text-sm'>
                £186 for an 11 month visa, £97 for a 6 month visa
              </div>
            </div>
            <div className='space-y-2'>
              <div className='text-blue-500 text-xs'>WHEN TO APPLY </div>
              <div className='text-black text-sm'>
                Up to 3 months prior to course start
              </div>
            </div>
            <div className='space-y-2'>
              <div className='text-blue-500 text-xs'>ARRIVAL IN THE UK</div>
              <div className='text-black text-sm'>
                Up to 7 days before course start
              </div>
            </div>
            <div className='space-y-2'>
              <div className='text-blue-500 text-xs'>REQUIREMENTS</div>
              <div className='text-black text-sm'>
                Enrollment proof, sufficient funds, valid passport
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VisaRequirements;
