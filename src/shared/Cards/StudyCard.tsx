import React from 'react';
import Img from '../Img';

const StudyCard = ({
  data,
  onlyThreeItems,
  isServices,
}: {
  data: any;
  onlyThreeItems?: boolean;
  isServices?: boolean;
}) => {
  return (
    <div
      className={`bg-gray-50 p-4 space-y-4 rounded-xl h-full w-full max-w-[320px] mb-4 lg:col-span-1 ${
        onlyThreeItems ? 'sm:col-span-12' : 'sm:col-span-6'
      } col-span-12`}
    >
      <div
        className={`${isServices ? 'space-y-4' : 'flex items-center gap-x-3'}`}
      >
        <Img
          src={data?.icon}
          alt='pdf'
          height={64}
          width={70}
          isLocal
          className='h-16'
        />
        <h4 className='text-black font-semibold text-lg'>{data?.title}</h4>
        {isServices && (
          <>
            <div className='h-[1px] bg-gray-200'></div>
            <p className='text-sm text-black'>{data?.description}</p>
          </>
        )}
      </div>
      {!isServices && (
        <>
          <div className='space-y-2'>
            <div className='text-blue-500 text-xs'>INTAKE</div>
            <div className='text-black text-sm'>{data?.intake}</div>
          </div>

          <div className='space-y-2'>
            <div className='text-blue-500 text-xs'>ADMISIIONS</div>
            <div className='text-black text-sm'>{data?.admission}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default StudyCard;
