import Img from '@/shared/Img';
import React from 'react';

const Banner = ({
  data,
  imageRight,
  className,
  styleTitle,
  styleDescription,
  styleImage,
}: {
  data: any;
  imageRight?: boolean;
  className?: string;
  styleTitle?: string;
  styleDescription?: string;
  styleImage?: string;
}) => {
  return (
    <div className='relative'>
      <Img
        src={data?.image}
        height={357}
        width={361}
        alt='heroImage'
        isLocal
        className={`absolute -top-20 right-[calc(100%-40%)] ${
          imageRight ? 'hidden' : 'lg:block hidden'
        } h-[357px] w-[361px] ${styleImage}`}
      />
      <div
        className={`rounded-3xl bg-blue-500 lg:px-10 md:mx-10 z-10 mb-16 flex flex-col justify-center ${className}`}
      >
        <div
          className={`space-y-4 max-w-[591px] ${
            imageRight ? '' : 'lg:ml-auto'
          } max-[1024px]:mx-auto w-full py-6 px-5`}
        >
          <h4
            className={`md:text-[32px] text-[28px] text-[#fafafa] font-semibold max-w-[500px] ${styleTitle}`}
          >
            {data?.title}
          </h4>
          <p
            className={`text-lg text-[#F9FAFB] font-medium pb-2 ${styleDescription}`}
          >
            {data?.description}
          </p>
          <div className='rounded-full w-full bg-white flex items-center relative h-16'>
            <input
              placeholder='Enter Your Email'
              className='text-gray-400 rounded-full font-medium sm:mr-[220px] mr-16 w-full bg-white outline-none h-16 p-5 pl-6'
            />
            <div className='flex items-center cursor-pointer text-white gap-x-3 p-5 absolute bg-[rgba(30,58,138,1)] hover:bg-[rgba(30,58,138,1)]/90 duration-500 h-12 rounded-full right-2'>
              <Img
                src={data?.btnIcon}
                alt='send'
                height={24}
                width={24}
                isLocal
              />
              <h4 className='text-sm font-medium sm:block hidden'>
                {data?.btnName}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <Img
        src={data?.image}
        height={357}
        width={361}
        alt='heroImage'
        isLocal
        className={`absolute bottom-0 left-[calc(100%-40%)] ${
          imageRight ? 'lg:block hidden' : 'hidden'
        } h-[357px] w-[361px] ${styleImage}`}
      />
    </div>
  );
};

export default Banner;
