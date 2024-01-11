import Button from '@/shared/Button/Button';
import Img from '@/shared/Img';
import React from 'react';

const WhatWeOffer = () => {
  const services = [
    {
      icon: '/icons/offer3.png',
      hoverIcon: '/icons/offerLight1.png',
      image: '/images/homeServices0.png',
      name: 'Scholarship Guidance',
    },
    {
      icon: '/icons/offer2.png',
      hoverIcon: '/icons/offerLight2.png',
      image: '/images/homeServices1.png',
      name: 'Visa Application',
    },
    {
      icon: '/icons/offer3.png',
      hoverIcon: '/icons/offerLight3.png',
      image: '/images/homeServices2.png',
      name: 'Study Counselling',
    },
    {
      icon: '/icons/offer4.png',
      hoverIcon: '/icons/offerLight4.png',
      image: '/images/homeServices3.png',
      name: 'University Application',
    },
    {
      icon: '/icons/offer5.png',
      hoverIcon: '/icons/offerLight5.png',
      image: '/images/homeServices4.png',
      name: 'Student Accomodation',
    },
  ];
  return (
    <div className='grid grid-cols-12 gap-y-12 gap-x-5 place-items-center'>
      <div className='font-semibold lg:col-span-6 col-span-12 lg:text-start text-center'>
        <div className='text-blue-500 w-fit lg:mx-0 mx-auto bg-blue-50 px-4 py-2 mb-2 rounded-lg'>
          WHAT WE OFFER
        </div>
        <div className='text-[32px] md:text-[40px]'>
          Our Best In Class Services For Our Students
        </div>
        <div className='text-lg font-normal'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod enim tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      {services?.map((item, idx) => (
        <div
          key={idx}
          className='relative max-w-[300px] lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12'
        >
          <div className='relative group'>
            <div className='z-10 h-[250px] w-[250px] rounded-2xl bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_59.37%,#000_100%)] absolute'></div>
            <Img
              src={item?.image}
              height={250}
              width={250}
              alt='heroImage'
              isLocal
              className='h-[250px] w-[250px] rounded-2xl'
            />
            <div className='h-[72px] w-[72px] border border-blue-50 absolute top-[10px] rounded-full flex items-center justify-center right-[10px]'>
              <div className='group-hover:bg-[#3B82F6] duration-500 bg-blue-50 h-[58px] z-40 w-[58px] rounded-full flex items-center justify-center'>
                <Img
                  src={item?.icon}
                  height={30}
                  width={30}
                  alt='heroImage'
                  isLocal
                  className='group-hover:hidden block'
                />
                <Img
                  src={item?.hoverIcon}
                  height={30}
                  width={30}
                  alt='heroImage'
                  isLocal
                  className='hidden group-hover:block'
                />
              </div>
            </div>
            <div className='absolute h-0 w-0 rounded-2xl z-30 group-hover:h-full group-hover:w-full duration-500 bg-blue-50 top-0 right-0' />
            <div className='hidden absolute group-hover:block mt-20 top-0 z-40 h-full p-5 animate-card'>
              <div className='font-bold text-lg'>Study Counselling</div>
              <p>
                There are many is variations of passage of lorem ipsum available
                but the majority
              </p>
            </div>
          </div>
          <h4 className='text-[#fafafa] bottom-3 z-20 left-4 font-medium absolute'>
            {item?.name}
          </h4>
        </div>
      ))}
      <div className='lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 bg-[#1E3A8A] h-[250px] rounded-2xl w-[250px] relative'>
        <Img
          src='/images/homeServiceBg.png'
          height={240}
          width={248}
          alt='heroImage'
          isLocal
        />
        <div className='absolute left-7 max-w-[195px] top-8 h-[250px] w-[200px]'>
          <div className='text-white font-semibold text-xl'>
            No Consulting Fees, Just Dreams Fulfiled!
          </div>
          <Button className='bg-white group hover:bg-blue-500 mt-16'>
            <div className='text-blue-800 group-hover:text-white duration-500'>
              Get Started
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
