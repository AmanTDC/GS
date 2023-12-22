import Banner from '@/features/Destinations/sections/Banner';
import Button from '@/shared/Button/Button';
import Img from '@/shared/Img';
import Modal from '@/shared/Modal/Modal';
import useScrollHidden from '@/utils/hooks/useScrollHidden';
import React, { useState } from 'react';

const Footer = ({ isBanner }: { isBanner?: boolean }) => {
  const [isActive, setIsActive] = useState(false);
  useScrollHidden(isActive);
  const socials = [
    '/icons/facebook.png',
    '/icons/insta.png',
    '/icons/twitter.png',
    '/icons/youtube.png',
    '/icons/linkedin.png',
  ];
  const bannerData = {
    image: '/images/banner.png',
    title: 'Ready to Transform Your Career? Take the First Step Today',
    description:
      'Achieve Boundless Opportunities and fulfil your Dreams Abroad',
    btnIcon: '/icons/send.png',
    btnName: 'Get Free Consultation',
  };
  return (
    <div className='bg-[#03060E] px-5 pt-16 text-white'>
      <div className='max-w-[1240px] mx-auto'>
        {isBanner ? (
          <Banner data={bannerData} className='-mt-[270px]'/>
        ) : (
          <div className='flex md:flex-row flex-col gap-5 justify-between mb-16 -mt-5'>
            <div className='space-y-3'>
              <h4 className='md:text-[32px] text-[28px] text-[#fafafa] font-semibold max-w-[500px]'>
                Ready to Transform Your Career? Take the First Steps Today
              </h4>
              <p className='text-lg text-[#F9FAFB] pb-2'>
                Achieve Boundless Opportunities and fulfil your Dreams Abroad
              </p>
            </div>
            <Button
              className='sm:w-fit w-full md:mx-0 mx-auto'
              onClick={() => setIsActive(true)}
            >
              Get Free Consultation
            </Button>
          </div>
        )}
        <div className='gap-x-5 sm:flex justify-between'>
          <div className='grid grid-cols-12 gap-x-5 gap-y-10'>
            <div className='lg:col-span-4 sm:col-span-8 col-span-12'>
              <Img
                src={'/images/LogoLight.png'}
                height={45}
                width={223}
                alt='heroImage'
                isLocal
              />
              <p className='text-sm mt-3'>
                Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt.
              </p>
              <div className='space-y-3 mt-5'>
                <div className='gap-x-2 flex items-center'>
                  <Img
                    src={'/icons/sms.png'}
                    height={24}
                    width={24}
                    alt='heroImage'
                    isLocal
                  />
                  <div>support@aeria.world</div>
                </div>

                <div className='gap-x-2 flex items-center'>
                  <Img
                    src={'/icons/location.png'}
                    height={24}
                    width={24}
                    alt='heroImage'
                    isLocal
                  />
                  <div>
                    G9A, 1, G Block, DLF Phase 1, Sector 26, Gurugram, Haryana
                    122002
                  </div>
                </div>
              </div>
            </div>
            <div className='list-none space-y-3 lg:col-span-2 sm:col-span-4 col-span-6'>
              <div className='text-blue-500 text-sm font-semibold mb-5'>
                STUDY DESTINATIONS
              </div>
              <li>United Kingdom</li>
              <li>United States</li>
              <li>Canada</li>
              <li>Australia</li>
              <li>New Zealand</li>
              <li>Ireland</li>
            </div>
            <div className='list-none space-y-3 lg:col-span-2 sm:col-span-4 col-span-6'>
              <div className='text-blue-500 text-sm font-semibold mb-5'>
                SERVICES
              </div>
              <li>Study Abroad Councelling</li>
              <li>Visa Assistance Application</li>
              <li>University Application Process</li>
              <li>University Scholarship Guidance</li>
              <li>Student Accomodation</li>
            </div>
            <div className='list-none space-y-3 lg:col-span-2 sm:col-span-4 col-span-6'>
              <div className='text-blue-500 text-sm font-semibold mb-5'>
                COMPANY
              </div>
              <li>About Us</li>
              <li>Partner With Us</li>
              <li>Careers</li>
              <li>Sitemap</li>
            </div>
            <div className='list-none space-y-3 lg:col-span-2 sm:col-span-4 col-span-6'>
              <div className='text-blue-500 text-sm font-semibold mb-5'>
                LEGAL
              </div>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookies Policy</li>
            </div>
          </div>
        </div>
        <div className='h-[1px] bg-[#122353] mt-10'></div>
        <div className='flex sm:flex-row flex-col sm:justify-between items-center gap-y-4 py-7'>
          <div>
            Copyright © 2023{' '}
            <span className='text-blue-500'>Global Scholar</span> , All Rights
            Reserved
          </div>
          <div className='flex gap-x-3'>
            {socials?.map((item, idx) => (
              <div
                className='h-[32px] cursor-pointer hover:rotate-[360deg] duration-500 flex items-center justify-center w-[32px] rounded-full bg-[#0C1D38]'
                key={idx}
              >
                <Img
                  src={item}
                  height={16}
                  width={16}
                  alt='heroImage'
                  isLocal
                />
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

export default Footer;
