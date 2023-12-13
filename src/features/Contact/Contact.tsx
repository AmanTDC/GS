import React, { useState } from 'react';
import HeroSection from './sections/HeroSection';
import Queries from './sections/Queries';
import Button from '@/shared/Button/Button';
import Modal from '@/shared/Modal/Modal';
import useScrollHidden from '@/utils/hooks/useScrollHidden';

const Contact = () => {
  const [isActive, setIsActive] = useState(false);
  useScrollHidden(isActive);
  return (
    <div>
      <HeroSection />
      <Queries />
      <Button onClick={() => setIsActive(true)}>Open</Button>
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

export default Contact;
