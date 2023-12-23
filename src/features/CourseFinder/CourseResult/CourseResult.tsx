import Navbar from '@/components/Navbar/Navbar';
import CourseCard from '@/shared/Cards/CourseCard';
import React, { useState } from 'react';
import Select from 'react-select';
const CourseResult = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  const filters = [
    {
      title: 'Country',
      options: [
        { value: 'uk', label: 'United Kingdom' },
        { value: 'usa', label: 'United States' },
        { value: 'canada', label: 'Canada' },
        { value: 'australia', label: 'Australia' },
        { value: 'ireland', label: 'Ireland' },
        { value: 'nz', label: 'New Zealand' },
      ],
    },
    {
      title: 'Course Level',
      options: [
        { value: '12th', label: '12th' },
        { value: "bachelor's", label: 'Bachelor’s Degree' },
        { value: "master's", label: 'Master’s Degree' },
        { value: 'phd', label: 'PhD' },
      ],
    },
    {
      title: 'Course Duration',
      options: [
        { value: 'one', label: 'Less than 1 Year' },
        { value: 'two', label: '1 - 2 Years' },
        { value: 'three', label: '2 - 3 Years' },
        { value: 'four', label: '3+ Years' },
      ],
    },
    {
      title: 'Mode of Study',
      options: [
        { value: 'fullTime', label: 'Full Time' },
        { value: 'halfTime', label: 'Half Time' },
        { value: 'internship', label: 'Internship' },
      ],
    },
    {
      title: 'Course Type',
      options: [
        { value: 'degree', label: 'Degree' },
        { value: 'diploma', label: 'Diploma' },
      ],
    },
    {
      title: 'Programs',
      options: [
        { value: 'Business & Management', label: 'Business & Management' },
        { value: 'Computer Science & IT', label: 'Computer Science & IT' },
        { value: 'Engineering', label: 'Engineering' },
        { value: 'Social Sciences', label: 'Social Sciences' },
        { value: 'Architecture', label: 'Architecture' },
        { value: 'Hospitality & Tourism', label: 'Hospitality & Tourism' },
        { value: 'Science', label: 'Science' },
        { value: 'Sports', label: 'Sports' },
        { value: 'Fine Arts', label: 'Fine Arts' },
        { value: 'Law', label: 'Law' },
        { value: 'Medicine', label: 'Medicine' },
        { value: 'Journalism & Media', label: 'Journalism & Media' },
        {
          value: 'Agriculture and Forestry',
          label: 'Agriculture and Forestry',
        },
      ],
    },
    {
      title: 'Intakes',
      options: [
        { value: 'Jan - Mar 2024', label: 'Jan - Mar 2024' },
        { value: 'Apr - Jun 2024', label: 'Apr - Jun 2024' },
        { value: 'Jul - Sep 2024', label: 'Jul - Sep 2024' },
        { value: 'Oct - Dec 2024', label: 'Oct - Dec 2024' },
        { value: 'Jan - Mar 2025', label: 'Jan - Mar 2025' },
        { value: 'Not Decided', label: 'Not Decided' },
      ],
    },
  ];
  const courses = [
    {
      title: 'Master of Health Information Management',
      university: 'La Trobe University',
      countryIcon: '/images/uk.png',
      country: 'United Kingdom',
      fee: '$ 25,000',
      tags: ['Post Graduate', 'Full Time', '2 Years'],
    },
    {
      title: 'Master of Health Information Management',
      university: 'La Trobe University',
      countryIcon: '/images/uk.png',
      country: 'United Kingdom',
      fee: '$ 25,000',
      tags: ['Post Graduate', 'Full Time', '2 Years'],
    },
    {
      title: 'Master of Health Information Management',
      university: 'La Trobe University',
      countryIcon: '/images/uk.png',
      country: 'United Kingdom',
      fee: '$ 25,000',
      tags: ['Post Graduate', 'Full Time', '2 Years'],
    },
    {
      title: 'Master of Health Information Management',
      university: 'La Trobe University',
      countryIcon: '/images/uk.png',
      country: 'United Kingdom',
      fee: '$ 25,000',
      tags: ['Post Graduate', 'Full Time', '2 Years'],
    },
  ];
  return (
    <div className='relative bg-[#F5F7FB]'>
      <Navbar />
      <div className='grid lg:grid-cols-12 py-[152px] max-w-[1120px] mx-auto gap-x-10 px-5'>
        <div className='col-span-4 bg-white p-6 h-fit lg:block hidden'>
          <div className='text-2xl font-bold'>Filters</div>
          <div className='space-y-4 mt-6'>
            {filters?.map((item, idx) => (
              <div key={idx}>
                <div className='text-xs font-medium text-gray-600 mb-1'>
                  {item?.title}
                  <span className='text-red-500 pl-1'>*</span>
                </div>
                <Select
                  options={item?.options}
                  isMulti
                  className='outline-none cursor-pointer'
                  defaultValue={[item?.options[0]]}
                />
              </div>
            ))}
          </div>
        </div>
        <div className='col-span-8 space-y-8'>
          <h1 className='font-semibold text-[32px]'>113 Course Found</h1>
          {courses?.map((item: any, idx: number) => (
            <CourseCard key={idx} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseResult;
