import React from 'react';
import Img from './Img';

const StatsCard = ({
  icon,
  title,
  subTitle,
  className,
}: {
  icon: string;
  title: string;
  subTitle: string;
  className: string;
}) => {
  return (
    <div className='flex items-center gap-x-3'>
      <div
        className={`h-16 w-16 flex justify-center items-center rounded-full ${className}`}
      >
        <Img
          src={icon}
          height={28}
          width={28}
          alt='heroImage'
          isLocal
          className='h-7'
        />
      </div>
      <div className='space-y-1'>
        <div className='text-black font-bold text-xl'>{title}</div>
        <div className='text-secondary text-sm'>{subTitle}</div>
      </div>
    </div>
  );
};

export default StatsCard;
