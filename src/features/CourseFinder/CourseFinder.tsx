import Navbar from '@/components/Navbar/Navbar';
import Img from '@/shared/Img';
import React, { useEffect, useState } from 'react';
import Questions from './components/Questions';

const CourseFinder = () => {
  const questions = [
    {
      title: 'In which country do you want to study?',
      image: '/images/course1.png',
      options: [
        { value: 'GB', label: 'United Kingdom', icon: '/images/uk.png' },
        { value: 'US', label: 'United States', icon: '/images/usa.png' },
        { value: 'CA', label: 'Canada', icon: '/images/canada.png' },
        {
          value: 'AU',
          label: 'Australia',
          icon: '/images/australia.png',
        },
        { value: 'IE', label: 'Ireland', icon: '/images/ireland.png' },
        // { value: 'NZ', label: 'New Zealand', icon: '/images/nz.png' },
      ],
    },
    {
      title: 'Which degree do you want to pursue?',
      image: '/images/course2.png',
      options: [
        { value: 'Bachelors', label: 'Bachelor’s Degree' },
        { value: 'Masters', label: 'Master’s Degree' },
        { value: 'PhD', label: 'PhD' },
        {
          value: 'Diploma;Post Graduate;Non-Credential;Certificate',
          label: 'Others',
        },
      ],
    },
    {
      title: 'What is your current level of education?',
      image: '/images/course3.png',
      options: [
        { value: 'Certificate', label: '12th' },
        { value: 'Bachelors', label: 'Bachelor’s Degree' },
        { value: 'Masters', label: 'Master’s Degree' },
        { value: 'PhD', label: 'PhD' },
      ],
    },
    {
      title: 'What is your preferred area/discipline of study?',
      image: '/images/course4.png',
      options: [
        { value: 'Sciences', label: 'Sciences' },
        {
          value: 'Business Management and Economics',
          label: 'Business Management and Economics',
        },
        { value: 'Arts', label: 'Arts' },
        {
          value: 'Engineering and Technology',
          label: 'Engineering and Technology',
        },
        { value: 'Social Sciences', label: 'Social Sciences' },
        { value: 'English', label: 'English' },
        { value: 'Medical', label: 'Medical' },
      ],
    },
    {
      title: 'What is your preferred intake?',
      image: '/images/course5.png',
      options: [
        { value: 'Jan 2024;Feb 2024;Mar 2024', label: 'Jan - Mar 2024' },
        { value: 'Apr 2024;May 2024;Jun 2024', label: 'Apr - Jun 2024' },
        { value: 'Jul 2024;Aug 2024;Sep 2024', label: 'Jul - Sep 2024' },
        { value: 'Oct 2024;Nov 2024;Dec 2024', label: 'Oct - Dec 2024' },
        { value: 'Jan 2025;Feb 2025;Mar 2025', label: 'Jan - Mar 2025' },
        { value: '', label: 'Not Decided' },
      ],
    },
    {
      title: 'Let’s Get Started',
      image: '/images/course6.png',
      inputs: [
        {
          label: 'Name',
          placeholder: 'Enter Your Name',
          icon: '/icons/Message.png',
          type: 'text',
        },
        {
          label: 'Email ID',
          placeholder: 'Enter Your Email ID',
          icon: '/icons/Message.png',
          type: 'email',
        },
        {
          label: 'Phone Number',
          placeholder: 'Enter Your Phone Number',
          icon: '/icons/Phone.png',
          type: 'tel',
        },
      ],
    },
  ];

  const [isActive, setIsActive] = useState(0);
  const [data, setData] = useState<any>();
  useEffect(() => {
    isActive === 0
      ? setData(questions[0])
      : isActive === 1
      ? setData(questions[1])
      : isActive === 2
      ? setData(questions[2])
      : isActive === 3
      ? setData(questions[3])
      : isActive === 4
      ? setData(questions[4])
      : setData(questions[5]);
  }, [isActive]);

  return (
    <div className='relative'>
      <div className='bubble absolute top-0 right-0 sm:block hidden' />
      <Navbar />
      <div className='z-10 relative pt-32 pb-20 bg-[url("/images/courseBg.png")] bg-[length:100%_467px] bg-no-repeat bg-bottom'>
        <div className='space-y-8 max-w-[1120px] mx-auto z-10 px-5'>
          <Img
            src='/images/testimonials.png'
            height={272}
            width={324}
            alt='heroImage'
            isLocal
            className='absolute right-0 lg:block hidden'
          />
          <h1 className='text-[28px] font-semibold text-[#1E3A8A] text-center'>
            Help us find the best course and college for you
          </h1>
          <div className='items-center gap-x-2 justify-center sm:flex hidden'>
            {questions?.map((item, idx) => (
              <div
                className={`h-1 w-8 rounded ${
                  isActive >= idx
                    ? 'bg-blue-500 cursor-pointer'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
                key={idx}
                onClick={() => isActive >= idx && setIsActive(idx)}
              />
            ))}
          </div>
          <Questions
            data={data}
            index={isActive}
            action={(idx) => setIsActive(idx)}
            navigation={questions?.length - 1 === isActive}
          />
        </div>
      </div>
      <div className='bubble absolute bottom-0 left-0 sm:block hidden' />
    </div>
  );
};

export default CourseFinder;
