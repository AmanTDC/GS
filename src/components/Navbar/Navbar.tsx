import Button from '@/shared/Button/Button';
import Img from '@/shared/Img';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import useNavbar from './views/useNavbar';
const Navbar = () => {
  const { router, setIsActive, services, countries, isActive } = useNavbar();
  return (
    <>
      <div
        className='bg-white z-[999] px-5 gap-x-5 lg:px-[60px] navbar top-0 sticky shadow-[0px_28px_61px_0px_#0000000D,0px_111px_111px_0px_#0000000A,0px_250px_150px_0px_#00000008,0px_444px_178px_0px_#00000003,1px_694px_194px_0px_#00000000]'
        id='navbar'
      >
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
            <div className='group' id='nav-item'>
              <div className='text-black font-medium flex items-center gap-x-2 cursor-pointer min-w-fit'>
                Our Services
                <div className='group-hover:-rotate-180 duration-300'>
                  <IoIosArrowDown />
                </div>
              </div>
              <div
                className='rounded-xl p-4 space-y-4 bg-white shadow-lg group-hover:block duration-300 hidden absolute'
                id='dropdown'
              >
                <h4 className='text-xs text-gray-400 font-medium'>
                  OUR SERVICES
                </h4>
                {services?.map((item, idx) => (
                  <div key={idx}>
                    <Link
                      href={item?.link}
                      className='text-sm text-black navItems'
                    >
                      {item?.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
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
                  <Link
                    href={item?.link}
                    key={idx}
                    className='flex gap-x-3 items-center cursor-pointer'
                  >
                    <Img
                      src={item?.icon}
                      alt='phone'
                      width={24}
                      height={24}
                      isLocal
                    />
                    <h4 className='text-sm text-black navItems'>
                      {item?.name}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
            <div className='text-black font-medium min-w-fit'>
              Course Finder
            </div>
            <Button
              type='button'
              className='min-w-fit'
              onClick={() => router.push('/contact')}
            >
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
          className='bg-[rgb(0,0,0,0.6)] absolute h-full w-screen top-0 z-[999]'
          onClick={() => setIsActive(false)}
        />
      )}
      {isActive && (
        <div
          className='bg-white h-screen w-[300px] space-y-6 py-5 px-4 fixed top-0'
          id='sideBar'
        >
          <div className='flex items-center justify-between mb-10'>
            <Link href='/'>
              <Img
                src={'/images/LogoDark.png'}
                alt='phone'
                width={150}
                height={45}
                isLocal
                className='cursor-pointer'
              />
            </Link>
            <RxCross2
              size={24}
              onClick={() => setIsActive(false)}
              className='-mr-2'
            />
          </div>
          <div className='group' id='nav-item'>
            <div className='text-black font-medium flex items-center justify-between cursor-pointer min-w-fit'>
              Our Services
              <div className='group-hover:-rotate-180 duration-300'>
                <IoIosArrowDown />
              </div>
            </div>
            <div
              className='rounded-xl p-4 space-y-4 bg-white shadow-lg group-hover:block duration-300 hidden absolute'
              id='dropdown'
            >
              <h4 className='text-xs text-gray-400 font-medium'>
                OUR SERVICES
              </h4>
              {services?.map((item, idx) => (
                <div key={idx}>
                  <Link
                    href={item?.link}
                    className='text-sm text-black navItems'
                  >
                    {item?.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
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
                <Link
                  key={idx}
                  href={item?.link}
                  className='flex gap-x-3 items-center'
                  onClick={() => setIsActive(false)}
                >
                  <Img
                    src={item?.icon}
                    alt='phone'
                    width={24}
                    height={24}
                    isLocal
                  />
                  <h4 className='text-sm text-black navItems'>{item?.name}</h4>
                </Link>
              ))}
            </div>
          </div>
          <div className='text-black font-medium min-w-fit'>Course Finder</div>
          <Button
            type='button'
            className='min-w-fit mt-5 flex mx-auto'
            onClick={() => router.push('/contact')}
          >
            Contact Us
          </Button>
        </div>
      )}
    </>
  );
};

export default Navbar;
