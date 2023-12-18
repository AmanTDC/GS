import React, { useState } from 'react';
import HeroSection from './sections/HeroSection';
import Queries from './sections/Queries';
import Button from '@/shared/Button/Button';
import Modal from '@/shared/Modal/Modal';
import useScrollHidden from '@/utils/hooks/useScrollHidden';

const Contact = () => {
  return (
    <div>
      <HeroSection />
      <Queries />
    </div>
  );
};

export default Contact;
