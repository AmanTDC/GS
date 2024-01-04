import Img from '@/shared/Img';
import React from 'react';

const DestinationCard = ({ data }: { data: any }) => {
  return (
    <div className='relative max-w-[300px] mb-4'>
      <div className='z-10 h-[240px] w-[300px] rounded-2xl bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_59.37%,#000_100%)] absolute' />
      <Img
        src={data?.image}
        height={240}
        width={300}
        alt='heroImage'
        isLocal
        className='max-w-[300px] h-[240px] rounded-2xl'
      />
      <div className='flex items-center gap-x-3 bottom-3 left-4 absolute z-10'>
        <Img src={data?.icon} height={32} width={32} alt='heroImage' isLocal />
        <div className=''>
          <div className='font-medium text-xs text-[#fafafa]'>Study in</div>
          <h4 className='text-[#fafafa] font-medium'>{data?.country}</h4>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
