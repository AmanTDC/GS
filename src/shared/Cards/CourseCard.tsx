import React from 'react';
import Img from '../Img';
import CountryCard from './CountryCard';
import Tags from './Tags';

const CourseCard = ({ data }: { data: any }) => {
  const icons = [
    { country: 'GB', icon: '/images/uk.png' },
    { country: 'US', icon: '/images/usa.png' },
    { country: 'CA', icon: '/images/canada.png' },
    { country: 'IE', icon: '/images/ireland.png' },
    // { country: 'NZ', icon: '/images/nz.png' },
    { country: 'AU', icon: '/images/australia.png' },
  ];
  const getIcon = () =>
    icons?.find((item) => item?.country === data?.university?.countryCode);
  return (
    <div className='p-6 rounded-lg bg-white space-y-4'>
      <h4 className='text-[22px] text-[#1E3A8A] font-semibold'>
        {data?.programName}
      </h4>
      <div className='flex items-center gap-x-3 !mt-3'>
        <Img
          src='/icons/bank.png'
          height={18}
          width={18}
          alt='heroImage'
          isLocal
        />
        <div className='font-medium'>{data?.university?.schoolName}</div>
        <CountryCard
          data={{
            icon: getIcon()?.icon,
            label: data?.university?.campusCity,
          }}
          className='ml-auto border-none items-center !p-0'
          styleIcon='h-[18px] w-[18px]'
          styleName='!font-medium'
        />
      </div>

      <div className='gap-4 flex'>
        <Tags icon='/icons/award.png' label={data?.programLevel} />
        <Tags
          icon='/icons/calendarTick.png'
          label={
            data?.durationStartFrom === data?.durationEndTo
              ? data?.durationStartFrom + ' months'
              : data?.durationStartFrom +
                ' - ' +
                data?.durationEndTo +
                ' months'
          }
        />
      </div>
      <div className='text-2xl font-medium'>
        {data?.currency + ' ' + data?.tuitionFee}
        <span className='text-sm pl-1'>first year</span>
      </div>
    </div>
  );
};

export default CourseCard;
