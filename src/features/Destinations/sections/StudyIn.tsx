import Button from '@/shared/Button/Button';
import Img from '@/shared/Img';
import React from 'react';

const StudyIn = ({
  data,
  country,
  index,
}: {
  data: any;
  country: string;
  index: string;
}) => {
  return (
    <div className='gap-8 grid grid-cols-5' id={index}>
      <div className='space-y-3 md:col-span-3 col-span-5'>
        <h4 className='md:text-[32px] text-[28px] font-semibold mb-2'>
          Why Study in {country}?
        </h4>
        <p className='text-secondary'>{data?.description}</p>

        <div className='space-y-4 mt-5'>
          {data?.data?.map((item: any, idx: number) => (
            <div className='flex gap-x-3' key={idx}>
              <Img
                src={'/icons/star.png'}
                height={24}
                width={24}
                alt='heroImage'
                isLocal
                className='h-6'
              />
              <div>
                <h4 className='text-xl font-medium'>{item?.title}</h4>
                <p className='text-secondary'>{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='p-5 rounded-lg bg-gray-50 space-y-6 md:col-span-2 col-span-5 md:max-w-none max-w-[430px] md:mx-0 mx-auto'>
        <h4 className='text-blue-500 text-[28px] font-semibold'>
          Turn your dream of studying abroad to reality!
        </h4>
        <p className='text-secondary'>
          Take the first step to make your study abroad dream a reality.{' '}
          <b>Get Free 30 Min complete assistance</b> with university
          shortlisting, application, scholarship, visa and finance.
        </p>
        <div className='space-y-4'>
          <div>
            <label className='text-gray-600 text-xs font-medium'>
              Name <span className='text-red-600'>*</span>
            </label>
            <div className='relative mt-1'>
              <input
                type='text'
                placeholder='Enter Your Name'
                className='h-10 rounded-lg pl-9 w-full outline-none border border-gray-200 text-sm'
              />
              <Img
                src={'/icons/Message.png'}
                height={16}
                width={16}
                alt='heroImage'
                isLocal
                className='absolute top-3 left-3'
              />
            </div>
          </div>
          <div>
            <label className='text-gray-600 text-xs font-medium'>
              Email ID <span className='text-red-600'>*</span>
            </label>
            <div className='relative mt-1'>
              <input
                type='text'
                placeholder='Enter Your Email ID'
                className='h-10 rounded-lg pl-9 w-full outline-none border border-gray-200 text-sm'
              />
              <Img
                src={'/icons/Message.png'}
                height={16}
                width={16}
                alt='heroImage'
                isLocal
                className='absolute top-3 left-3'
              />
            </div>
          </div>
          <div>
            <label className='text-gray-600 text-xs font-medium'>
              Phone Number <span className='text-red-600'>*</span>
            </label>
            <div className='relative mt-1'>
              <input
                type='text'
                placeholder='Enter Your Phone Number'
                className='h-10 rounded-lg pl-9 w-full outline-none border border-gray-200 text-sm'
              />
              <Img
                src={'/icons/Phone.png'}
                height={16}
                width={16}
                alt='heroImage'
                isLocal
                className='absolute top-3 left-3'
              />
            </div>
          </div>
        </div>
        <div className='flex items-center gap-x-2'>
          <input type='checkbox' className='h-5 w-5' />
          <p className='text-xs text-gray-600'>
            By clicking you agree to our{' '}
            <span className='text-[#007DFC]'>Privacy Policy</span> and{' '}
            <span className='text-[#007DFC]'>Terms & Conditions</span>{' '}
            <span className='text-red-600'>*</span>
          </p>
        </div>
        <Button
          className='bg-blue-900 py-3 hover:!bg-blue-900/80 flex items-center justify-center gap-x-2'
          fullWidth
        >
          Get Free Consultation
          <Img
            src={'/icons/Check.png'}
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

export default StudyIn;