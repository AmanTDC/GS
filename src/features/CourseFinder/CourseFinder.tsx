import Navbar from '@/components/Navbar/Navbar';
import Button from '@/shared/Button/Button';
import Img from '@/shared/Img';
import React, { useEffect, useState } from 'react';
import Questions from './components/Questions';
import { useRouter } from 'next/router';

const CourseFinder = () => {
  const questions = [
    {
      title: 'In which country do you want to study?',
      image: '/images/course1.png',
      options: [
        { name: 'United Kingdom', icon: '/images/uk.png' },
        { name: 'United States', icon: '/images/usa.png' },
        { name: 'Canada', icon: '/images/canada.png' },
        { name: 'Australia', icon: '/images/australia.png' },
        { name: 'New Zealad', icon: '/images/nz.png' },
        { name: 'Ireland', icon: '/images/ireland.png' },
      ],
    },
    {
      title: 'Which degree do you want to pursue?',
      image: '/images/course2.png',
      options: ['Bachelor’s Degree', 'Master’s Degree', 'PhD'],
    },
    {
      title: 'What is your current level of education?',
      image: '/images/course3.png',
      options: ['12th', 'Bachelor’s Degree', 'Master’s Degree', 'PhD'],
    },
    {
      title: 'What is your preferred area/discipline of study?',
      image: '/images/course4.png',
      options: [
        'Business & Management',
        'Computer Science & IT',
        'Engineering',
        'Social Sciences',
        'Architecture',
        'Hospitality & Tourism',
        'Science',
        'Sports',
        'Fine Arts',
        'Law',
        'Medicine',
        'Journalism & Media',
        'Agriculture and Forestry',
      ],
    },
    {
      title: 'What is your preferred intake?',
      image: '/images/course5.png',
      options: [
        'Jan - Mar 2024',
        'Apr - Jun 2024',
        'Jul - Sep 2024',
        'Oct - Dec 2024',
        'Jan - Mar 2025',
        'Not Decided',
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
  console.log({ isActive });

  return (
    <div className='relative'>
      <div className='bubble absolute top-0 right-0' />
      <Navbar />
      <div className='relative pt-32 pb-20 bg-[url("/images/courseBg.png")] bg-[length:100%_467px] bg-no-repeat bg-bottom'>
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
          <div className='flex items-center gap-x-2 justify-center'>
            {questions?.map((item, idx) => (
              <div
                className={`h-1 w-8 rounded cursor-pointer ${
                  isActive >= idx ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                key={idx}
                // onClick={() => isActive >= idx && setIsActive(idx)}
                onClick={() => setIsActive(idx)}
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
      <div className='bubble absolute bottom-0 left-0' />
    </div>
  );
};

export default CourseFinder;
