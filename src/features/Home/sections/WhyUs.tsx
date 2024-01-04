import Button from '@/shared/Button/Button';
import Img from '@/shared/Img';
import Modal from '@/shared/Modal/Modal';
import useScrollHidden from '@/utils/hooks/useScrollHidden';
import React, { useState } from 'react';

const WhyUs = () => {
  const standOut = [
    {
      title: 'Direct Consultation',
      description:
        'There are many is variations of passage of lorem ipsum available but the majority',
    },
    {
      title: 'Cost Effective',
      description:
        'There are many is variations of passage of lorem ipsum available but the majority',
    },
    {
      title: '24/7 Support',
      description:
        'There are many is variations of passage of lorem ipsum available but the majority',
    },
    {
      title: '1000+ Happy Customers',
      description:
        'There are many is variations of passage of lorem ipsum available but the majority',
    },
  ];
  const [isActive, setIsActive] = useState(false);
  useScrollHidden(isActive);
  return (
    <div className='bg-[#F8FBFF] px-5 my-16 py-16'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='font-semibold text-center'>
          <div className='text-blue-500 w-fit mx-auto bg-blue-50 px-4 py-2 mb-2 rounded-lg'>
            WHY CHOOSE US
          </div>
          <div className='text-[32px] md:text-[40px]'>
            What Makes Us Stand Out
          </div>
        </div>
        <Img
          src={'/images/standOut.png'}
          height={272}
          width={324}
          alt='heroImage'
          isLocal
          className='absolute lg:block hidden left-0 -mt-16'
        />
        <div className='sm:flex gap-x-6 sm:space-y-0 space-y-6 mt-12'>
          <div className='bg-[#1E3A8A] rounded-2xl h-full max-w-[370px] mx-auto w-full relative'>
            <Img
              src='/images/standOutCardBg.png'
              height={370}
              width={370}
              alt='heroImage'
              isLocal
              className='absolute right-0 top-0'
            />
            <div className='px-10 py-12 space-y-8 relative z-10'>
              <div className='text-[#B4C0E1] text-sm font-semibold'>
                BEAT THE OLD WAY
              </div>
              <div className='text-white font-semibold md:text-[32px] text-[28px]'>
                Why you should choose the only quality consultation
              </div>
              <Button
                className='bg-white group w-full hover:bg-blue-500'
                onClick={() => setIsActive(true)}
              >
                <div className='text-[#1E3A8A] group-hover:text-white duration-500'>
                  Get Free Consultation
                </div>
              </Button>
            </div>
          </div>
          <div className='grid lg:grid-cols-2 gap-6'>
            {standOut?.map((item, idx) => (
              <div className='bg-white group h-full overflow-hidden shadow-card relative p-6 rounded-2xl'>
                <div className='h-24 w-24 absolute -right-3 -top-3 rounded-full bg-blue-50 z-10 flex justify-center items-center'>
                  <Img
                    src={'/icons/handshake.png'}
                    height={48}
                    width={48}
                    alt='heroImage'
                    isLocal
                  />
                </div>
                <div className='space-y-3 mt-6 relative z-10'>
                  <h4 className='text-xl font-semibold'>{item?.title}</h4>
                  <p className='text-secondary'>{item?.description}</p>
                </div>
                <div className='absolute h-20 w-20 rounded-2xl group-hover:h-full group-hover:w-full duration-500 bg-blue-50 group-hover:top-0 group-hover:right-0 -top-3 -right-3' />
              </div>
            ))}
          </div>
        </div>
      </div>
      {isActive && (
        <Modal
          onClose={() => setIsActive(false)}
          className='bg-transparent p-0'
        >
          <div
            className='absolute text-6xl cursor-pointer right-3 top-0 md:text-white'
            onClick={() => setIsActive(false)}
          >
            &times;
          </div>
          <iframe
            src='https://outlook.office365.com/owa/calendar/FreeConsultation@Globalscholar.co.uk/bookings/'
            width='100%'
            height='100%'
            scrolling='yes'
            className='w-[100vw] md:w-[calc(100vw-200px)] max-w-[1120px] md:h-[calc(100vh-100px)] h-[100vh]'
          ></iframe>
        </Modal>
      )}
    </div>
  );
};

export default WhyUs;
