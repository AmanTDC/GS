import useScrollHidden from '@/utils/hooks/useScrollHidden';
import { useRouter } from 'next/router';
import { useState } from 'react';

const useNavbar = () => {
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
      name: 'Ireland',
    },
    {
      icon: '/images/australia.png',
      name: 'Newzealand',
    },
  ];
  const services = [
    'Free Study Abroad Counselling',
    'Free Visa Assistance Application',
    'University Application Process',
    'University Scholarships Guidance',
    'Student Accomodation Services',
  ];
  const [isActive, setIsActive] = useState(false);
  useScrollHidden(isActive);
  const slideNav = () => {
    var x: any = document.getElementById('navbar');
    if (window.scrollY >= 100) {
      if (x.classList == 'active') {
        x.classList.remove('active');
      } else {
        x.classList.add('active');
      }
    } else {
      x.classList.remove('active');
    }
  };
  typeof window !== 'undefined' && window.addEventListener('scroll', slideNav);
  const router = useRouter();

  return { router, setIsActive, services, countries, isActive };
};

export default useNavbar;
