import Button from '@/shared/Button/Button';
import Img from '@/shared/Img';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import useNavbar from './views/useNavbar';
const Navbar = () => {
  const {
    router,
    setIsActive,
    services,
    countries,
    isActive,
    dropdownActive,
    setDropdownActive,
    isModifiedNavbar,
  } = useNavbar();

  return (
    <>
      <div
        className={`${
          isModifiedNavbar
            ? 'bg-transparent absolute w-full'
            : 'bg-white !sticky shadow-navbar'
        } z-[999] px-5 gap-x-5 lg:px-[60px] navbar top-0`}
        id='navbar'
      >
        <div className='max-w-[1240px] mx-auto flex items-center justify-between h-20'>
          <Link href='/'>
            <Img
              src={
                router.pathname === '/'
                  ? isActive === 1
                    ? '/images/LogoDark.png'
                    : '/images/LogoWhite.png'
                  : '/images/LogoDark.png'
              }
              alt='phone'
              width={223}
              height={45}
              isLocal
              className='cursor-pointer'
            />
          </Link>
          <div className='lg:flex items-center lg:gap-x-10 gap-x-5 hidden'>
            <div
              className={`${
                router.pathname === '/' ? 'text-white' : 'text-black'
              } group`}
              id='nav-item'
            >
              <div className='font-medium flex items-center gap-x-2 cursor-pointer min-w-fit'>
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
            <div
              className={`${
                router.pathname === '/' ? 'text-white' : 'text-black'
              } group`}
              id='nav-item'
            >
              <div className='font-medium flex items-center gap-x-2 cursor-pointer min-w-fit'>
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
            <Link
              href='/courseFinder'
              className={`${
                router.pathname === '/' ? 'text-white' : 'text-black'
              } font-medium min-w-fit`}
              id='nav-item'
            >
              Course Finder
            </Link>
            <Button
              type='button'
              className='min-w-fit'
              onClick={() => router.push('/contact')}
            >
              Book Free Consultation
            </Button>
          </div>

          <GiHamburgerMenu
            size={24}
            className='lg:hidden block hamburger'
            onClick={() => setIsActive(0)}
          />
        </div>
      </div>
      {isActive === 0 && (
        <div
          className='bg-[rgb(0,0,0,0.6)] absolute h-full w-screen top-0 z-[999]'
          onClick={() => setIsActive(-1)}
        />
      )}
      {isActive === 0 && (
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
              onClick={() => setIsActive(-1)}
              className='-mr-2'
            />
          </div>
          <div>
            <div
              className='text-black font-medium flex items-center justify-between cursor-pointer min-w-fit'
              onClick={() => setDropdownActive(0)}
            >
              Our Services
              <div
                className={`${
                  dropdownActive === 0 ? '-rotate-180' : ''
                } duration-300`}
              >
                <IoIosArrowDown />
              </div>
            </div>
            <div
              className={`space-y-4 bg-white duration-300 hidden mt-4 ml-3 ${
                dropdownActive === 0 && '!block'
              }`}
            >
              {services?.map((item, idx) => (
                <div key={idx} className='animate-accordion'>
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
          <div>
            <div
              className='text-black font-medium flex items-center justify-between cursor-pointer min-w-fit'
              onClick={() => setDropdownActive(1)}
            >
              Destinations
              <div className='group-hover:-rotate-180 duration-300'>
                <IoIosArrowDown />
              </div>
            </div>
            <div
              className={`space-y-4 bg-white duration-300 hidden mt-4 ml-3 ${
                dropdownActive === 1 && '!block'
              }`}
            >
              {countries?.map((item, idx) => (
                <Link
                  key={idx}
                  href={item?.link}
                  className='flex gap-x-3 items-center animate-accordion'
                  onClick={() => setIsActive(-1)}
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
