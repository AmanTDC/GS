import React from 'react';
import Img from '../Img';

const GetStartedCard = ({ data }: { data: any }) => {
  return (
    <div className='flex gap-x-3 md:items-center'>
      <div className='w-16'>
        <div className='h-16 w-16 rounded-full bg-blue-50 flex justify-center items-center'>
          <Img
            src={data?.icon}
            height={35}
            width={35}
            alt='heroImage'
            isLocal
          />
        </div>
      </div>
      <div className='space-y-2'>
        <h4 className='font-semibold text-lg text-black'>{data?.title}</h4>
        <p className='text-lg text-secondary'>{data?.description}</p>
      </div>
    </div>
  );
};

export default GetStartedCard;
