import React from 'react';

const HowToApply = ({ data, index }: { data: any; index: string }) => {
  return (
    <div className='text-black space-y-7 mt-16' id={index}>
      <h1 className='text-[28px] font-bold'>{data?.title}</h1>
      <p>{data?.description}</p>
      <div className='space-y-2'>
        {data?.data?.map((item: any, idx: number) => (
          <div className='flex gap-x-2'>
            {idx + 1}
            {'. '}
            <div key={idx}>
              <b>{item?.title}</b>
              {item?.description}
            </div>
          </div>
        ))}
      </div>
      <div className='space-y-10'>
        <p>
          Unlock the doors to world-class education with GlobalScholar. We are
          your partners in the university application process, guiding you
          toward your academic aspirations. Let us help you build the foundation
          for a brighter future.
        </p>
        <p>
          Choose GlobalScholar for a university application process that
          simplifies your path to education abroad.
        </p>
      </div>
    </div>
  );
};

export default HowToApply;
