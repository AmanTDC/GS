import Link from 'next/link';
import React from 'react';

const TopNav = ({ isHowToApply }: { isHowToApply: boolean }) => {
  return (
    <div
      className='overflow-x-scroll text-secondary font-medium list-none flex sm:gap-x-10 sm:justify-center justify-between top-20 sticky bg-white z-[1]'
      id='topnav'
    >
      <Link href='#1' data-to-scrollspy-id='1'>
        Why Choose Us
      </Link>
      <Link href='#2' data-to-scrollspy-id='2'>
        What to Expect
      </Link>
      <Link href='#3' data-to-scrollspy-id='3'>
        How to Get Started
      </Link>
      {isHowToApply && (
        <Link href='#4' data-to-scrollspy-id='4'>
          How to Apply
        </Link>
      )}
      <Link href='#5' data-to-scrollspy-id='5'>
        FAQ
      </Link>
    </div>
  );
};

export default TopNav;
