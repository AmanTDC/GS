import Link from 'next/link';
import React from 'react';

const TopNav = () => {
  return (
    <div
      className='overflow-x-scroll text-secondary font-medium list-none flex gap-x-10 justify-center top-20 sticky bg-white z-[1]'
      id='topnav'
    >
      <Link
        href='#first'
        data-to-scrollspy-id='first'
        className='flex items-center'
      >
        Why Choose Us
      </Link>
      <Link
        href='#second'
        data-to-scrollspy-id='second'
        className='flex items-center'
      >
        What to Expect
      </Link>
      <Link
        href='#third'
        data-to-scrollspy-id='third'
        className='flex items-center'
      >
        How to Get Started
      </Link>
      <Link href='#fourth' data-to-scrollspy-id='fourth'>
        FAQ
      </Link>
    </div>
  );
};

export default TopNav;
