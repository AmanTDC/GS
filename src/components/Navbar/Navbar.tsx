import Button from '@/shared/Button/Button';
import Img from '@/shared/Img';
import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-white shadow-2xl px-5 flex h-20 items-center justify-between'>
      <Img
        src={'/images/LogoDark.png'}
        alt='phone'
        width={223}
        height={45}
        isLocal
      />
      <div className='flex items-center gap-x-10'>
        <div className='text-black font-medium'>Our Services</div>
        <div className='text-black font-medium'>Destinations</div>
        <div className='text-black font-medium'>Course Finder</div>
        <Button type='submit' className=''>
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
