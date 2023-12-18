import Button from '@/shared/Button/Button';
import Img from '@/shared/Img';
import React from 'react';
import { FaStar } from 'react-icons/fa';
const Queries = () => {
  return (
    <div className='gap-8 grid grid-cols-12 max-w-[1120px] mx-auto my-14 p-6'>
      <div className='md:col-span-6 col-span-12 md:mx-0 mx-auto'>
        <Img
          src='/images/contactImage.png'
          alt='call'
          height={600}
          width={450}
          isLocal
          className=''
        />
      </div>
      <div className='md:col-span-6 col-span-12 p-6'>
        <h4 className='text-[28px] font-semibold mb-8'>Reach Us At</h4>
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
        <div className='flex gap-x-3 mt-12 mb-6'>
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
        <div className='h-[1px] my-4 border border-[#E5E7EB]' />
        <div className='space-y-4'>
          <h1 className='font-bold text-2xl'>Customer Ratings</h1>
          <div className='flex items-center gap-x-5'>
            <h1 className='font-semibold md:text-[32px] text-[28px] text-secondary'>
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
        <Button
          className='!bg-[#1E3A8A] py-3 hover:!bg-[#1E3A8A]/80 flex items-center justify-center gap-x-2 mt-8'
          fullWidth
        >
          Get Free Consultation
          <div className='h-5 w-5 rounded-full bg-white flex items-center justify-center'>
            <Img
              src={'/icons/diagonalArrow.png'}
              height={16}
              width={16}
              alt='heroImage'
              isLocal
            />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Queries;
