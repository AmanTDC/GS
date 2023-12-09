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
        <Img src={data?.icon} alt='pdf' height={64} width={64} isLocal />
        <h4 className='text-black font-semibold text-lg'>{data?.title}</h4>
        {isServices && (
          <>
            <div className='h-[1px] bg-gray-200'></div>
            <p className='text-sm text-black'>{data?.description}</p>
          </>
        )}
      </div>

      {data?.content?.map((item2: any, idx2: number) => (
        <div className='space-y-2' key={idx2}>
          <div className='text-blue-500 text-xs'>{item2?.key}</div>
          <div className='text-black text-sm'>{item2?.value}</div>
        </div>
      ))}
    </div>
  );
};

export default StudyCard;
