import Button from '@/shared/Button/Button';
import Img from '@/shared/Img';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
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
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className='bg-white px-5 gap-x-5 lg:px-[60px] shadow-2xl'>
        <div className='max-w-[1240px] flex items-center justify-between h-20'>
          <Link href='/'>
            <Img
              src={'/images/LogoDark.png'}
              alt='phone'
              width={223}
              height={45}
              isLocal
              className='cursor-pointer'
            />
          </Link>
          <div className='md:flex items-center lg:gap-x-10 gap-x-5 hidden'>
            <Link href='/services' className='group' id='nav-item'>
              <div className='text-black font-medium flex items-center gap-x-2 cursor-pointer min-w-fit'>
                Our Services
                <div className='group-hover:-rotate-180 duration-300'>
                  <IoIosArrowDown />
                </div>
              </div>
            </Link>
            <div className='group' id='nav-item'>
              <div className='text-black font-medium flex items-center gap-x-2 cursor-pointer min-w-fit'>
                Destinations
                <div className='group-hover:-rotate-180 duration-300'>
                  <IoIosArrowDown />
                </div>
              </div>
              <div
                className='rounded-xl p-4 space-y-4 bg-white shadow-lg group-hover:block duration-300 hidden absolute'
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
            <div className='text-black font-medium min-w-fit'>
              Course Finder
            </div>
            <Button type='submit' className='min-w-fit'>
              Contact Us
            </Button>
          </div>

          <GiHamburgerMenu
            size={24}
            className='md:hidden block'
            onClick={() => setIsActive(true)}
          />
        </div>
      </div>
      {isActive && (
        <div
          className='bg-white h-screen w-[60%] space-y-6 py-5 px-4 absolute top-0 right-0'
          id='sideBar'
        >
          <RxCross2
            size={24}
            onClick={() => setIsActive(false)}
            className='absolute right-2'
          />
          <Link href='/services' className='group' id='nav-item'>
            <div className='text-black font-medium flex items-center justify-between cursor-pointer min-w-fit'>
              Our Services
              <div className='group-hover:-rotate-180 duration-300'>
                <IoIosArrowDown />
              </div>
            </div>
          </Link>
          <div className='group' id='nav-item'>
            <div className='text-black font-medium flex items-center justify-between cursor-pointer min-w-fit'>
              Destinations
              <div className='group-hover:-rotate-180 duration-300'>
                <IoIosArrowDown />
              </div>
            </div>
            <div
              className='rounded-xl p-4 space-y-4 bg-white shadow-lg group-hover:block duration-300 hidden absolute'
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
          <Button type='submit' className='min-w-fit mt-5 self-center'>
            Contact Us
          </Button>
        </div>
      )}
    </>
  );
};

export default Navbar;
