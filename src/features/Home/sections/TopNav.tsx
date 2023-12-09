import Link from 'next/link';
import React from 'react';

const TopNav = () => {
  return (
    <div
      className='overflow-x-scroll text-secondary font-medium list-none flex justify-between top-20 sticky bg-white z-[1]'
      id='topnav'
    >
      <Link
        href='#first'
        data-to-scrollspy-id='first'
        className='flex items-center'
      >
        Study in the UK
      </Link>
      <Link
        href='#second'
        data-to-scrollspy-id='second'
        className='flex items-center'
      >
        Admission Requirements
      </Link>
      <Link
        href='#third'
        data-to-scrollspy-id='third'
        className='flex items-center'
      >
        Intakes
      </Link>
      <Link href='#fourth' data-to-scrollspy-id='fourth'>
        Cost of Studying
      </Link>
      <Link href='#fifth' data-to-scrollspy-id='fifth'>
        Scholarships
      </Link>
      <Link href='#sixth' data-to-scrollspy-id='sixth'>
        Top Universities
      </Link>
      <Link href='#seventh' data-to-scrollspy-id='seventh'>
        FAQ
      </Link>
    </div>
  );
};

export default TopNav;
