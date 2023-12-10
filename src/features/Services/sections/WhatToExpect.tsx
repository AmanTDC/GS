import StudyCard from '@/shared/Cards/StudyCard';
import React from 'react';

const WhatToExpect = ({ data, index }: { data: any; index: string }) => {
  return (
    <div className='my-16 space-y-7' id={index}>
      <h4 className='text-[32px] font-semibold mb-2'>{data?.title}</h4>

      <div className='grid lg:grid-cols-3 grid-cols-12 gap-5 place-items-center'>
        {data?.data?.map((item: any, idx: number) => (
          <StudyCard data={item} key={idx} isServices />
        ))}
      </div>
    </div>
  );
};

export default WhatToExpect;
