import useScrollHidden from '@/utils/hooks/useScrollHidden';
import { useRouter } from 'next/router';
import { useState } from 'react';

const useNavbar = () => {
  const countries = [
    {
      icon: '/images/uk.png',
      name: 'United Kingdom',
      link: '/uk',
    },
    {
      icon: '/images/us.png',
      name: 'United States',
      link: '/usa',
    },
    {
      icon: '/images/canada.png',
      name: 'Canada',
      link: '/canada',
    },
    {
      icon: '/images/australia.png',
      name: 'Australia',
      link: '/australia',
    },
    {
      icon: '/images/ireland.png',
      name: 'Ireland',
      link: '/ireland',
    },
    {
      icon: '/images/nz.png',
      name: 'Newzealand',
      link: '/nz',
    },
  ];
  const services = [
    { name: 'Free Study Abroad Counselling', link: '/services/study-abroad' },
    {
      name: 'Free Visa Assistance Application',
      link: '/services/visa',
    },
    {
      name: 'University Application Process',
      link: '/services/application',
    },
    {
      name: 'University Scholarships Guidance',
      link: '/services/scholarships',
    },
    { name: 'Student Accomodation Services', link: '/services/accomodation' },
  ];
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  const [isActive, setIsActive] = useState(-1);
  const [dropdownActive, setDropdownActive] = useState(-1);
  useScrollHidden(isActive === 0);
  const slideNav = () => {
    var x: any = document.getElementById('navbar');
    if (window.scrollY >= 100) {
      setIsActive(1);
      if (x.classList === 'active') {
        x.classList.remove(isHomePage ? 'active' : 'active');
      } else {
        x.classList.add(isHomePage ? 'active' : 'active');
      }
    } else {
      setIsActive(-1);
      x.classList.remove(isHomePage ? 'active' : 'active');
    }
  };
  typeof window !== 'undefined' && window.addEventListener('scroll', slideNav);

  return {
    isHomePage,
    router,
    setIsActive,
    services,
    countries,
    isActive,
    dropdownActive,
    setDropdownActive,
  };
};

export default useNavbar;
