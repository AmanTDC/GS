import Button from '@/shared/Button/Button';
import Img from '@/shared/Img';
import React from 'react';

const Questions = ({ data, index }: { data: any; index: number }) => {
  return (
    <div className='!mt-16 grid md:grid-cols-2 lg:gap-20 md:gap-5 gap-16 md:place-items-start place-items-center'>
      <Img
        src={data?.image}
        height={510}
        width={520}
        alt='heroImage'
        isLocal
        className='rounded-2xl'
      />
      <div className='space-y-8 p-6 pt-0'>
        <h1 className='text-[28px] font-semibold'>{data?.title}</h1>
        <div
          className={`${
            index === 3
              ? 'flex flex-wrap'
              : 'grid grid-cols-2 max-[420px]:grid-cols-1'
          } gap-8`}
        >
          {data?.options?.map((item: any, idx: number) => (
            <div
              className='border border-gray-200 rounded-3xl p-4 flex gap-x-2'
              key={idx}
            >
              {item?.icon && (
                <Img
                  src={item?.icon}
                  height={24}
                  width={24}
                  alt='heroImage'
                  isLocal
                  className='h-6 w-6'
                />
              )}
              <h4 className='font-semibold'>{item?.name || item}</h4>
            </div>
          ))}
        </div>
        <Button isDisabled className='flex items-center !px-8 ml-auto !mt-16'>
          Next
          <Img
            src='/icons/arrowRight.png'
            height={18}
            width={18}
            alt='heroImage'
            isLocal
          />
        </Button>
      </div>
    </div>
  );
};

export default Questions;
