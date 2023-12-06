import Accordion from '@/shared/Accordion/Accordion';
import Button from '@/shared/Button/Button';
import Img from '@/shared/Img';
import StatsCard from '@/shared/StatsCard';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from '@/shared/Button/NavigationButtons';
import { VERIFICATION_SLICK_SETTING } from '@/utils/constants/slickSliderSettings';

const Home = () => {
  const studyInUk = [
    {
      title: 'High-Quality Education',
      description:
        "The UK is home to some of the world's oldest and most prestigious universities, such as the University of Oxford and the University of Cambridge",
    },
    {
      title: 'Wide Range of Programs',
      description:
        'One can choose a degree in business, engineering, law, medicine, social sciences, and more based on interests and career aspirations in UK',
    },
    {
      title: 'Quality Education',
      description:
        'UK boasts Quality Assurance Agency (QAA), a national body established to ensure the highest teaching standards at institutions across the UK.',
    },
    {
      title: 'International Recognition',
      description:
        'UK degrees are recognized worldwide, which gives graduates a competitive advantage in the job market. UK has become the second most popular study destination after the US.',
    },
    {
      title: 'Cultural Diversity',
      description:
        'The UK is a diverse and multicultural society that allows international students to experience different cultures and lifestyles.',
    },
  ];

  const FAQs = [
    {
      title: 'How much does it cost to study in the UK?',
      description:
        'The fees for courses vary across different universities in the UK. The average cost of UG courses in UK range from £9,000- 30,000 (INR 9,00,000- 30,00,000). The fees for PG courses is around £15,000-35,000 (INR 15,00,000 -35,00,000). MBA courses in UK cost around £12,000- 80,000 (INR 12,00,000- 80,00,000).',
    },
    {
      title: 'Is it possible to study in the UK without IELTS score?',
      description:
        'The fees for courses vary across different universities in the UK. The average cost of UG courses in UK range from £9,000- 30,000 (INR 9,00,000- 30,00,000). The fees for PG courses is around £15,000-35,000 (INR 15,00,000 -35,00,000). MBA courses in UK cost around £12,000- 80,000 (INR 12,00,000- 80,00,000).',
    },
    {
      title: 'Can one work part time while studying in the UK?',
      description:
        'The fees for courses vary across different universities in the UK. The average cost of UG courses in UK range from £9,000- 30,000 (INR 9,00,000- 30,00,000). The fees for PG courses is around £15,000-35,000 (INR 15,00,000 -35,00,000). MBA courses in UK cost around £12,000- 80,000 (INR 12,00,000- 80,00,000).',
    },
    {
      title: 'What is the minimum  score required to study in the UK?',
      description:
        'The fees for courses vary across different universities in the UK. The average cost of UG courses in UK range from £9,000- 30,000 (INR 9,00,000- 30,00,000). The fees for PG courses is around £15,000-35,000 (INR 15,00,000 -35,00,000). MBA courses in UK cost around £12,000- 80,000 (INR 12,00,000- 80,00,000).',
    },
    {
      title: 'What are the best courses to study in the UK?',
      description:
        'The fees for courses vary across different universities in the UK. The average cost of UG courses in UK range from £9,000- 30,000 (INR 9,00,000- 30,00,000). The fees for PG courses is around £15,000-35,000 (INR 15,00,000 -35,00,000). MBA courses in UK cost around £12,000- 80,000 (INR 12,00,000- 80,00,000).',
    },
    {
      title: 'What are the Top universities to study in the UK?',
      description:
        'The fees for courses vary across different universities in the UK. The average cost of UG courses in UK range from £9,000- 30,000 (INR 9,00,000- 30,00,000). The fees for PG courses is around £15,000-35,000 (INR 15,00,000 -35,00,000). MBA courses in UK cost around £12,000- 80,000 (INR 12,00,000- 80,00,000).',
    },
    {
      title: 'How long can one stay in the UK after studying?',
      description:
        'The fees for courses vary across different universities in the UK. The average cost of UG courses in UK range from £9,000- 30,000 (INR 9,00,000- 30,00,000). The fees for PG courses is around £15,000-35,000 (INR 15,00,000 -35,00,000). MBA courses in UK cost around £12,000- 80,000 (INR 12,00,000- 80,00,000).',
    },
  ];
  const destinations = [
    '/images/slide1.png',
    '/images/slide2.png',
    '/images/slide3.png',
    '/images/slide4.png',
  ];
  const socials = [
    '/icons/facebook.png',
    '/icons/insta.png',
    '/icons/twitter.png',
    '/icons/youtube.png',
    '/icons/linkedin.png',
  ];
  return (
    <>
      <div className='bg-[linear-gradient(97.17deg,#D8E6FD_0%,rgba(216,230,253,0.02)_99.99%)] p-12 space-y-10'>
        <div className='flex justify-between'>
          <div className='max-w-2xl space-y-6'>
            <p className='font-medium text-[32px] text-secondary leading-[44px]'>
              Explore Top universities, Courses, Scholarships, Student VISA
              Requirements and Cost for Indian Students in 2024
            </p>
            <div className='rounded-full w-full bg-white flex items-center relative'>
              <input
                placeholder='Enter Your Email Address'
                className='text-gray-400 rounded-full sm:w-2/3 bg-white outline-none h-16 p-5 pl-6'
              />
              <div className='flex items-center text-white gap-x-3 p-5 absolute bg-[rgba(30,58,138,1)] h-12 rounded-full right-2'>
                <Img
                  src='/icons/pdf.png'
                  alt='pdf'
                  height={24}
                  width={24}
                  isLocal
                />
                <h4 className='text-sm font-medium'>Download Full PDF</h4>
              </div>
            </div>
            <h1 className='text-5xl font-semibold text-black border border-dashed border-[rgba(151,71,255,1)] rounded-lg px-4 py-5'>
              Study in <span className='text-blue-500'>The United Kingdom</span>
            </h1>
          </div>
          <Img
            src={'/images/heroImage.svg'}
            height={456}
            width={366}
            alt='heroImage'
            isLocal
          />
        </div>
        <div className='bg-blue-50 rounded-xl p-5 max-[640px]:space-y-5 grid lg:grid-cols-4 sm:grid-cols-2 max-[640px]:place-items-center shadow-md'>
          <StatsCard
            icon='/icons/partner.png'
            title='280+'
            subTitle='Partner Universities'
            className='bg-[linear-gradient(180deg,rgba(254,226,226,0)_0%,#FEE2E2_100%)]'
          />
          <StatsCard
            icon='/icons/money.png'
            title='£9250 - £63.9K'
            subTitle='Annual Tuition Fees'
            className='bg-[linear-gradient(0deg,#EBF3FE_0.74%,rgba(235,243,254,0)_100.74%)]'
          />
          <StatsCard
            icon='/icons/students.png'
            title='400k+'
            subTitle='International Students'
            className='bg-[linear-gradient(180deg,rgba(220,_252,_231,_0)_0%,#DCFCE7_100%)]'
          />
          <StatsCard
            icon='/icons/visas.png'
            title='2 Years'
            subTitle='Post Study Work Visas'
            className='bg-[linear-gradient(180deg,rgba(254,_249,_195,_0)_0%,#FEF9C3_100%)]'
          />
        </div>
      </div>
      <div
        className='px-5 lg:px-[60px] text-secondary font-medium list-none flex justify-between top-0 sticky bg-white shadow z-10'
        id='topnav'
      >
        <li>Study in the UK</li>
        <li>Admission Requirements</li>
        <li>Intakes</li>
        <li>Cost of Studying</li>
        <li>Scholarships</li>
        <li>Top Universities</li>
        <li>FAQ</li>
      </div>
      <div className='px-5 lg:px-[60px] mt-16 space-y-12'>
        <div className='gap-x-8 flex'>
          <div className='gap-y-3'>
            <h4 className='text-[32px] font-semibold mb-2'>
              Why Study in The United Kingdom?
            </h4>
            <p className='text-secondary'>
              Welcome to the UK - home to over 500,000 international students
              each year. Study at pioneering universities and gain skills that
              top global employers seek. Experience the culture that shaped the
              modern world. Join a diverse community of changemakers.
            </p>

            <div className='space-y-4 mt-5'>
              {studyInUk?.map((item, idx) => (
                <div className='flex gap-x-3' key={idx}>
                  <Img
                    src={'/icons/star.png'}
                    height={24}
                    width={24}
                    alt='heroImage'
                    isLocal
                    className='h-6'
                  />
                  <div>
                    <h4 className='text-xl font-medium'>{item?.title}</h4>
                    <p className='text-secondary'>{item?.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='p-5 rounded-lg bg-gray-50 space-y-6'>
            <h4 className='text-[#3B82F6] text-[28px] font-semibold'>
              Turn your dream of studying abroad to reality!
            </h4>
            <p className='text-secondary'>
              Take the first step to make your study abroad dream a reality.{' '}
              <b>Get Free 30 Min complete assistance</b> with university
              shortlisting, application, scholarship, visa and finance.
            </p>
            <div className='space-y-4'>
              <div>
                <label className='text-gray-600 text-xs font-medium'>
                  Name <span className='text-red-600'>*</span>
                </label>
                <div className='relative mt-1'>
                  <input
                    type='text'
                    placeholder='Enter Your Name'
                    className='h-10 rounded-lg pl-9 w-full outline-none border border-gray-200 text-sm'
                  />
                  <Img
                    src={'/icons/Message.png'}
                    height={16}
                    width={16}
                    alt='heroImage'
                    isLocal
                    className='absolute top-3 left-3'
                  />
                </div>
              </div>
              <div>
                <label className='text-gray-600 text-xs font-medium'>
                  Email ID <span className='text-red-600'>*</span>
                </label>
                <div className='relative mt-1'>
                  <input
                    type='text'
                    placeholder='Enter Your Email ID'
                    className='h-10 rounded-lg pl-9 w-full outline-none border border-gray-200 text-sm'
                  />
                  <Img
                    src={'/icons/Message.png'}
                    height={16}
                    width={16}
                    alt='heroImage'
                    isLocal
                    className='absolute top-3 left-3'
                  />
                </div>
              </div>
              <div>
                <label className='text-gray-600 text-xs font-medium'>
                  Phone Number <span className='text-red-600'>*</span>
                </label>
                <div className='relative mt-1'>
                  <input
                    type='text'
                    placeholder='Enter Your Phone Number'
                    className='h-10 rounded-lg pl-9 w-full outline-none border border-gray-200 text-sm'
                  />
                  <Img
                    src={'/icons/Phone.png'}
                    height={16}
                    width={16}
                    alt='heroImage'
                    isLocal
                    className='absolute top-3 left-3'
                  />
                </div>
              </div>
            </div>
            <div className='flex items-center gap-x-2'>
              <input type='checkbox' className='h-5 w-5' />
              <p className='text-xs text-gray-600'>
                By clicking you agree to our{' '}
                <span className='text-[#007DFC]'>Privacy Policy</span> and{' '}
                <span className='text-[#007DFC]'>Terms & Conditions</span>{' '}
                <span className='text-red-600'>*</span>
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 className='text-[32px] font-semibold mb-4'>
            Frequently Asked Questions
          </h4>
          <Accordion
            data={FAQs?.map((item) => ({
              title: item.title,
              description: item?.description,
            }))}
          />
        </div>

        <div>
          <h4 className='text-[32px] font-semibold mb-4'>
            Explore Other Study Destinations
          </h4>
          <Slider
            {...VERIFICATION_SLICK_SETTING}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
          >
            {destinations?.map((item) => (
              <Img
                src={item}
                height={240}
                width={300}
                alt='heroImage'
                isLocal
                className='p-4'
              />
            ))}
          </Slider>
        </div>
      </div>
      <div className='bg-[#03060E] mt-40 px-10 pt-16 text-white'>
        <div className='gap-x-5 flex justify-between'>
          <div className='max-w-[460px]'>
            <Img
              src={'/images/LogoLight.png'}
              height={45}
              width={223}
              alt='heroImage'
              isLocal
            />
            <p className='text-sm mt-3'>
              Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae dicta sunt.
            </p>
            <div className='space-y-3 mt-5'>
              <div className='gap-x-2 flex items-center'>
                <Img
                  src={'/icons/sms.png'}
                  height={24}
                  width={24}
                  alt='heroImage'
                  isLocal
                />
                <div>support@aeria.world</div>
              </div>
              <div className='gap-x-2 flex items-center'>
                <Img
                  src={'/icons/call.png'}
                  height={24}
                  width={24}
                  alt='heroImage'
                  isLocal
                />
                <div>+91 9871179882</div>
              </div>
              <div className='gap-x-2 flex items-center'>
                <Img
                  src={'/icons/location.png'}
                  height={24}
                  width={24}
                  alt='heroImage'
                  isLocal
                />
                <div>
                  G9A, 1, G Block, DLF Phase 1, Sector 26, Gurugram, Haryana
                  122002
                </div>
              </div>
            </div>
          </div>
          <div className='grid lg:grid-cols-4 gap-x-5'>
            <div className='list-none space-y-3'>
              <div className='text-[#3B82F6] text-sm font-semibold mb-5'>
                STUDY DESTINATIONS
              </div>
              <li>United Kingdom</li>
              <li>United States</li>
              <li>Canada</li>
              <li>Australia</li>
              <li>New Zealand</li>
              <li>Ireland</li>
            </div>
            <div className='list-none space-y-3'>
              <div className='text-[#3B82F6] text-sm font-semibold mb-5'>
                SERVICES
              </div>
              <li>Study Abroad Councelling</li>
              <li>Visa Assistance Application</li>
              <li>University Application Process</li>
              <li>University Scholarship Guidance</li>
              <li>Student Accomodation</li>
            </div>
            <div className='list-none space-y-3'>
              <div className='text-[#3B82F6] text-sm font-semibold mb-5'>
                COMPANY
              </div>
              <li>About Us</li>
              <li>Partner With Us</li>
              <li>Careers</li>
              <li>Sitemap</li>
            </div>
            <div className='list-none space-y-3'>
              <div className='text-[#3B82F6] text-sm font-semibold mb-5'>
                LEGAL
              </div>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookies Policy</li>
            </div>
          </div>
        </div>
        <div className='h-[1px] bg-[#122353] mt-10'></div>
        <div className='flex justify-between py-7'>
          <div>
            Copyright © 2023 <span className='text-[#3B82F6]'>AeriaX</span> ,
            All Rights Reserved
          </div>
          <div className='flex gap-x-3'>
            {socials?.map((item, idx) => (
              <div
                className='h-[32px] flex items-center justify-center w-[32px] rounded-full bg-[#0C1D38]'
                key={idx}
              >
                <Img
                  src={item}
                  height={16}
                  width={16}
                  alt='heroImage'
                  isLocal
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
