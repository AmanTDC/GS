import { NextArrow, PrevArrow } from '@/shared/Button/NavigationButtons';
import { VERIFICATION_SLICK_SETTING } from '@/utils/constants/slickSliderSettings';
import React from 'react';
import Slider from 'react-slick';

const VisaRequirements = ({ data, index }: { data: any; index: string }) => {
  return (
    <div id={index} className='space-y-3 my-16'>
      <h4 className='text-[32px] font-semibold'>Student Visa Requirements</h4>
      <p className='text-secondary pb-3'>{data?.description}</p>
      {data?.data?.length > 3 ? (
        <Slider
          {...VERIFICATION_SLICK_SETTING}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
        >
          {data?.data?.map((item: any, idx: number) => (
            <div
              className='bg-gray-50 border border-gray-200 p-4 space-y-4 rounded-lg max-w-[320px] mb-4'
              key={idx}
            >
              <h4 className='text-black font-semibold text-lg'>
                {idx + 1}. {item?.title}
              </h4>
              <div className='h-[1px] bg-gray-200'></div>
              {item?.requirements?.map((e: string) => (
                <div className='space-y-2' key={e}>
                  <div className='text-blue-500 text-xs'>WHO’S IT FOR</div>
                  <div className='text-black text-sm'>{e}</div>
                </div>
              ))}
            </div>
          ))}
        </Slider>
      ) : (
        <div className='grid grid-cols-12 gap-8 place-items-center'>
          {data?.data?.map((item: any, idx: number) => (
            <div
              className={`bg-gray-50 lg:col-span-4 h-full border border-gray-200 p-4 space-y-4 rounded-lg max-w-[320px] mb-4 ${
                idx === 2 ? 'col-span-12' : 'sm:col-span-6 col-span-12'
              }`}
              key={idx}
            >
              <h4 className='text-black font-semibold text-lg'>
                {idx + 1}. {item?.title}
              </h4>
              <div className='h-[1px] bg-gray-200'></div>
              {item?.requirements?.map((e: string) => (
                <div className='space-y-2' key={e}>
                  <div className='text-blue-500 text-xs'>WHO’S IT FOR</div>
                  <div className='text-black text-sm'>{e}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VisaRequirements;
