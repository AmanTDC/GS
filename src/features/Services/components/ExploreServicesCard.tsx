import Img from '@/shared/Img';
import React from 'react';

const ExploreServicesCard = ({ data }: { data: any }) => {
  return (
    <div className='relative max-w-[300px]'>
      <div className='z-10 h-[240px] w-[300px] rounded-2xl bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_59.37%,#000_100%)] absolute' />
      <Img
        src={data?.image}
        height={240}
        width={300}
        alt='heroImage'
        isLocal
        className='max-w-[300px] h-[240px] rounded-2xl'
      />
      <h4 className='text-[#fafafa] bottom-4 left-4 z-20 font-medium absolute'>
        {data?.name}
      </h4>
    </div>
  );
};

export default ExploreServicesCard;
