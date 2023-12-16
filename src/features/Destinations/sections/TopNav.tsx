import Link from 'next/link';
import React from 'react';

const TopNav = ({ countryName }: { countryName: string }) => {
  return (
    <div
      className='overflow-x-scroll text-secondary font-medium list-none flex justify-between top-20 sticky bg-white z-[1]'
      id='topnav'
    >
      <Link href='#1' data-to-scrollspy-id='1'>
        Study in {countryName?.toUpperCase()}
      </Link>
      <Link href='#2' data-to-scrollspy-id='2'>
        Admission Requirements
      </Link>
      <Link href='#3' data-to-scrollspy-id='3'>
        Scholarships
      </Link>
      <Link href='#4' data-to-scrollspy-id='4'>
        Intakes
      </Link>
      <Link href='#5' data-to-scrollspy-id='5'>
        Cost of Studying
      </Link>
      <Link href='#6' data-to-scrollspy-id='6'>
        Living Expenses
      </Link>
      <Link href='#7' data-to-scrollspy-id='7'>
        Career Opportunities
      </Link>
      <Link href='#8' data-to-scrollspy-id='8'>
        FAQ
      </Link>
    </div>
  );
};

export default TopNav;
