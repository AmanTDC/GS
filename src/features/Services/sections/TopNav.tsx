import Link from 'next/link';
import React from 'react';

const TopNav = () => {
  return (
    <div
      className='overflow-x-scroll text-secondary font-medium list-none flex sm:gap-x-10 sm:justify-center justify-between top-20 sticky bg-white z-[1]'
      id='topnav'
    >
      <Link href='#first' data-to-scrollspy-id='first'>
        Why Choose Us
      </Link>
      <Link href='#second' data-to-scrollspy-id='second'>
        What to Expect
      </Link>
      <Link href='#third' data-to-scrollspy-id='third'>
        How to Get Started
      </Link>
      <Link href='#fourth' data-to-scrollspy-id='fourth'>
        FAQ
      </Link>
    </div>
  );
};

export default TopNav;
