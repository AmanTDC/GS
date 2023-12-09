import Button from '@/shared/Button/Button';
import Img from '@/shared/Img';
import React from 'react';
import { FaStar } from 'react-icons/fa';
const Queries = () => {
  return (
    <div className='gap-8 grid grid-cols-12 max-w-[1120px] mx-auto my-14 px-5'>
      <div className='space-y-6 md:col-span-6 col-span-12 md:max-w-none md:mx-0 mx-auto'>
        <h4 className='text-blue-500 text-[28px] font-semibold'>
          Do you have any questions?
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
      <div className='md:col-span-6 col-span-12 space-y-8 bg-gray-50 h-fit p-6 rounded-3xl'>
        <h4 className='text-blue-500 text-[28px] font-semibold'>Reach Us At</h4>
        <div className='flex gap-x-3'>
          <Img
            src='/icons/calling.png'
            alt='call'
            height={48}
            width={48}
            isLocal
            className='h-fit'
          />
          <div className='text-lg gap-y-2'>
            <div className='font-medium'>Call us at</div>
            <div className='text-secondary'>
              +91 98117 00671 (Mon-Sat 10AM - 8PM)
            </div>
          </div>
        </div>
        <div className='flex gap-x-3'>
          <Img
            src='/icons/sms1.png'
            alt='sms'
            height={48}
            width={48}
            isLocal
            className='h-fit'
          />
          <div className='text-lg gap-y-2'>
            <div className='font-medium'>Email us at</div>
            <div className='text-secondary'>info@globalscholar.co.uk</div>
          </div>
        </div>
        <div className='h-[1px] border border-secondary' />
        <div className='space-y-4'>
          <h1 className='font-bold text-2xl'>Customer Ratings</h1>
          <div className='flex items-center gap-x-5'>
            <h1 className='font-semibold text-[32px] text-secondary'>
              4.8 / 5.0
            </h1>
            {[1, 1, 1, 1, 1]?.map((item, idx) => (
              <FaStar key={idx} color='#FFC107' size={36} />
            ))}
          </div>
          <p className='text-gray-500 text-sm'>
            By 700+ Visa Approved Students
          </p>
        </div>
      </div>
    </div>
  );
};

export default Queries;
