import Img from '@/shared/Img';
import React from 'react';

const CountryCard = ({ data, onclick }: { data: any; onclick: () => void }) => {
  return (
    <div
      className='relative group mb-16 cursor-pointer sm:w-[362px]'
      onClick={onclick}
    >
      <Img
        src={data?.image}
        height={420}
        width={362}
        alt='heroImage'
        isLocal
        className='max-h-[420px] sm:max-w-[362px] max-w-[280px] h-full rounded-2xl'
      />
      <div className='bg-[linear-gradient(180deg,rgba(30,58,138,0.00)_0%,#1E3A8A_91.32%)] h-0 w-0 rounded-2xl absolute top-1/2 left-1/2 opacity-0 group-hover:opacity-100 group-hover:top-0 group-hover:left-0 group-hover:h-full group-hover:w-full duration-500'>
        <div className='text-white h-full flex justify-center items-center text-[38px] sm:text-[45px] font-semibold'>
          {data?.name}
        </div>
      </div>
      <div className='h-[92px] absolute -bottom-10 sm:left-[37%] left-[34%] w-[92px] rounded-full bg-white flex items-center justify-center'>
        <Img src={data?.icon} height={86} width={86} alt='heroImage' isLocal />
      </div>
    </div>
  );
};

export default CountryCard;
