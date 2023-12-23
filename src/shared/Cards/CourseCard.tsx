import React from 'react';
import Img from '../Img';
import CountryCard from './CountryCard';

const CourseCard = ({ data }: { data: any }) => {
  console.log({ data });

  return (
    <div className='p-6 rounded-lg bg-white space-y-4'>
      <h4 className='text-[22px] text-[#1E3A8A] font-semibold'>
        {data?.title}
      </h4>
      <div className='flex items-center gap-x-3 !mt-3'>
        <Img
          src='/icons/bank.png'
          height={18}
          width={18}
          alt='heroImage'
          isLocal
        />
        <div className='font-medium'>{data?.university}</div>
        <CountryCard
          data={{ icon: data?.countryIcon, name: data?.country }}
          className='ml-auto border-none !p-0'
          styleIcon='h-[18px] w-[18px]'
          styleName='!font-medium'
        />
      </div>
      <div className='gap-4 flex'>
        {data?.tags?.map((item: string, idx: number) => (
          <div
            key={idx}
            className='px-3 py-2 bg-blue-50 rounded-[10px] w-fit font-medium text-xs'
          >
            {item}
          </div>
        ))}
      </div>
      <div className='text-2xl font-medium'>
        {data?.fee}
        <span className='text-sm pl-1'>first year</span>
      </div>
    </div>
  );
};

export default CourseCard;
