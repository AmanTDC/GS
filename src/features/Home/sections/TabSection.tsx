import Accordion from '@/shared/Accordion/Accordion';
import { NextArrow, PrevArrow } from '@/shared/Button/NavigationButtons';
import Img from '@/shared/Img';
import { VERIFICATION_SLICK_SETTING } from '@/utils/constants/slickSliderSettings';
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';
import ScrollSpy from 'react-ui-scrollspy';

const TabSection = () => {
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
  const intakes = [
    {
      icon: '/images/greenLeaf.png',
      title: 'Spring Intake - Jan',
      content: [
        {
          key: 'INTAKE',
          value:
            'This admission intake happens in the month of January and ends till the month of February.',
        },
        {
          key: 'ADMISIIONS',
          value: 'June-September',
        },
      ],
    },
    {
      icon: '/images/orangeLeaf.png',
      title: 'Autumn Intake - Sep',
      content: [
        {
          key: 'INTAKE',
          value:
            'It happens in the month of September and lasts till October, Majority of the prominent universities and educational institutions of the UK take the enrollment of students in this intake.',
        },
        {
          key: 'ADMISIIONS',
          value: 'February-May',
        },
      ],
    },
    {
      icon: '/images/sun.png',
      title: 'Summer Intake - May',
      content: [
        {
          key: 'INTAKE',
          value:
            'This intake of admission occurs only in selected universities for some specific programs only, and that too not on a regular basis. This is a supplementary intake period.',
        },
        {
          key: 'ADMISIIONS',
          value: 'January-February',
        },
      ],
    },
  ];
  return (
    <div className='max-w-[1120px] mx-auto px-5'>
      <div
        className='overflow-x-scroll text-secondary font-medium list-none flex justify-between top-0 sticky bg-white z-[60]'
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
        <Link href=''>Cost of Studying</Link>
        <Link href=''>Scholarships</Link>
        <Link href=''>Top Universities</Link>
        <Link href='#fourth'>FAQ</Link>
      </div>
      <div className='mt-16 mb-[400px] space-y-12'>
        <ScrollSpy>
          <div className='gap-8 grid grid-cols-5' id='first'>
            <div className='space-y-3 md:col-span-3 col-span-5'>
              <h4 className='text-[32px] font-semibold mb-2'>
                Why Study in The United Kingdom?
              </h4>
              <p className='text-secondary'>
                Welcome to the UK - home to over 500,000 international students
                each year. Study at pioneering universities and gain skills that
                top global employers seek. Experience the culture that shaped
                the modern world. Join a diverse community of changemakers.
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
            <div className='p-5 rounded-lg bg-gray-50 space-y-6 md:col-span-2 col-span-5 md:max-w-none max-w-[430px] md:mx-0 mx-auto'>
              <h4 className='text-blue-500 text-[28px] font-semibold'>
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
          <div id='second' className='space-y-3 my-16'>
            <h4 className='text-[32px] font-semibold'>
              Student Visa Requirements
            </h4>
            <p className='text-secondary pb-3'>
              Welcome to the UK - home to over 500,000 international students
              each year. Study at pioneering universities and gain skills that
              top global employers seek. Experience the culture that shaped the
              modern world. Join a diverse community of changemakers.
            </p>
            <Slider
              {...VERIFICATION_SLICK_SETTING}
              nextArrow={<NextArrow />}
              prevArrow={<PrevArrow />}
            >
              {destinations?.map((item) => (
                <div className='bg-gray-50 border border-gray-200 p-4 space-y-4 rounded-lg max-w-[320px] mb-4'>
                  <h4 className='text-black font-semibold text-lg'>
                    1. Short-Term Study
                  </h4>
                  <div className='h-[1px] bg-gray-200'></div>
                  <div className='space-y-2'>
                    <div className='text-blue-500 text-xs'>WHO’S IT FOR</div>
                    <div className='text-black text-sm'>
                      Short-term students
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <div className='text-blue-500 text-xs'>COST</div>
                    <div className='text-black text-sm'>
                      £186 for an 11 month visa, £97 for a 6 month visa
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <div className='text-blue-500 text-xs'>WHEN TO APPLY </div>
                    <div className='text-black text-sm'>
                      Up to 3 months prior to course start
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <div className='text-blue-500 text-xs'>
                      ARRIVAL IN THE UK
                    </div>
                    <div className='text-black text-sm'>
                      Up to 7 days before course start
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <div className='text-blue-500 text-xs'>REQUIREMENTS</div>
                    <div className='text-black text-sm'>
                      Enrollment proof, sufficient funds, valid passport
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div id='third' className='space-y-3 mt-20 max-[700px]:mt-28'>
            <h4 className='text-[32px] font-semibold'>Intakes in the UK</h4>
            <p className='text-secondary pb-4'>
              UK universities offer multiple admission intakes throughout the
              year, granting international students greater flexibility. These
              admission windows typically align with the academic calendar, with
              major intakes in September and January. Some institutions also
              offer additional intakes in April and May. This flexibility allows
              international students to plan their studies in the UK that best
              fit their schedules and academic goals. It's advisable to consult
              specific universities for detailed information on intake options
              and application deadlines.
            </p>

            <div className='grid lg:grid-cols-3 grid-cols-12 gap-5 place-items-center'>
              {intakes?.map((item, idx) => (
                <div
                  className={`bg-gray-50 p-4 space-y-4 rounded-xl h-full max-w-[320px] mb-4 lg:col-span-1 ${
                    idx === 2 ? 'sm:col-span-12' : 'sm:col-span-6'
                  } col-span-12`}
                >
                  <div className='flex items-center gap-x-3'>
                    <Img
                      src={item?.icon}
                      alt='pdf'
                      height={48}
                      width={48}
                      isLocal
                    />
                    <h4 className='text-black font-semibold text-lg'>
                      {item?.title}
                    </h4>
                  </div>
                  <div className='h-[1px] bg-gray-200'></div>
                  {item?.content?.map((item2, idx2) => (
                    <div className='space-y-2' key={idx2}>
                      <div className='text-blue-500 text-xs'>{item2?.key}</div>
                      <div className='text-black text-sm'>{item2?.value}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div id='fourth' className='my-16'>
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
        </ScrollSpy>
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
    </div>
  );
};

export default TabSection;
