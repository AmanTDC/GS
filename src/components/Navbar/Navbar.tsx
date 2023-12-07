import Button from '@/shared/Button/Button';
import Img from '@/shared/Img';
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
const Navbar = () => {
  const countries = [
    {
      icon: '/images/uk.png',
      name: 'United Kingdom',
    },
    {
      icon: '/images/us.png',
      name: 'United States',
    },
    {
      icon: '/images/canada.png',
      name: 'Canada',
    },
    {
      icon: '/images/australia.png',
      name: 'Australia',
    },
    {
      icon: '/images/ireland.png',
      name: 'Newzealand',
    },
    {
      icon: '/images/ireland.png',
      name: 'Ireland',
    },
  ];
  return (
    <div className='bg-white shadow-2xl px-5 gap-x-5 lg:px-[60px] flex h-20 items-center justify-between'>
      <Img
        src={'/images/LogoDark.png'}
        alt='phone'
        width={223}
        height={45}
        isLocal
      />
      <div className='md:flex items-center lg:gap-x-10 gap-x-5 hidden'>
        <div className='text-black font-medium flex items-center gap-x-2 cursor-pointer min-w-fit'>
          Our Services <IoIosArrowDown />
        </div>
        <div className='group' id='nav-item'>
          <div className='text-black font-medium flex items-center gap-x-2 cursor-pointer min-w-fit'>
            Destinations
            <IoIosArrowDown />
          </div>
          <div
            className='rounded-xl p-4 space-y-4 bg-white shadow-lg group-hover:block duration-500 hidden absolute'
            id='dropdown'
          >
            <h4 className='text-xs text-gray-400 font-medium'>
              TOP DESTINATIONS TO STUDY
            </h4>
            {countries?.map((item, idx) => (
              <div key={idx} className='flex gap-x-3 items-center'>
                <Img
                  src={item?.icon}
                  alt='phone'
                  width={24}
                  height={24}
                  isLocal
                />
                <h4 className='text-sm text-black'>{item?.name}</h4>
              </div>
            ))}
          </div>
        </div>
        <div className='text-black font-medium min-w-fit'>Course Finder</div>
        <Button type='submit' className='min-w-fit'>
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
