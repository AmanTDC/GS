import Navbar from '@/components/Navbar/Navbar';
import CourseCard from '@/shared/Cards/CourseCard';
import Select from 'react-select';
import { CiSliderHorizontal } from 'react-icons/ci';
import { useState } from 'react';
import Img from '@/shared/Img';
import Link from 'next/link';
import { RxCross2 } from 'react-icons/rx';
import useScrollHidden from '@/utils/hooks/useScrollHidden';
import Button from '@/shared/Button/Button';
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
  const [isActive, setIsActive] = useState<number>();
  useScrollHidden(isActive === 0);
  return (
    <div className='relative bg-[#FAFAFA]'>
      <Navbar />
      <div className='grid lg:grid-cols-12 py-[152px] max-w-[1120px] mx-auto gap-x-10 px-5'>
        <div className='col-span-4 bg-white p-6 h-fit lg:block hidden rounded-2xl'>
          <div className='text-2xl font-bold'>Filters</div>
          <div className='space-y-4 my-6'>
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
          <div className='flex items-center gap-x-6'>
            <Button className='bg-white !text-black hover:!bg-transparent w-full px-0 font-bold border border-gray-300'>
              Reset
            </Button>
            <Button className='bg-blue-900 w-full !px-2 hover:!bg-blue-900/80 font-bold'>
              Apply Filters
            </Button>
          </div>
        </div>
        <div className='col-span-8 space-y-8'>
          <div className='flex justify-between items-center'>
            <h1 className='font-semibold text-[32px]'>113 Course Found</h1>
            <CiSliderHorizontal
              color='#000'
              size={30}
              onClick={() => setIsActive(0)}
              className='lg:hidden'
            />
          </div>
          {courses?.map((item: any, idx: number) => (
            <CourseCard key={idx} data={item} />
          ))}
        </div>
      </div>
      {isActive === 0 && (
        <div
          className='bg-[rgb(0,0,0,0.6)] absolute h-full w-screen top-0 z-[999]'
          onClick={() => setIsActive(-1)}
        />
      )}
      {isActive === 0 && (
        <div
          className='bg-white h-screen sm:w-[450px] w-[300px] space-y-6 py-5 px-4 fixed top-0 right-0'
          id='filter'
        >
          <div className='flex items-center justify-between mb-10'>
            <Link href='/'>
              <Img
                src={'/images/LogoDark.png'}
                alt='phone'
                width={150}
                height={45}
                isLocal
                className='cursor-pointer'
              />
            </Link>
            <RxCross2
              size={24}
              onClick={() => setIsActive(-1)}
              className='-mr-2'
            />
          </div>
          <div className='text-2xl font-bold'>Filters</div>
          <div className='h-[calc(100%-100px)] overflow-y-scroll space-y-6'>
            <div className='space-y-4'>
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
            <div className='flex items-center gap-x-6 !my-8'>
              <Button className='bg-white !text-black hover:!bg-transparent w-full px-0 font-bold border border-gray-300'>
                Reset
              </Button>
              <Button className='bg-blue-900 w-full px-0 hover:!bg-blue-900/80 font-bold'>
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseResult;
