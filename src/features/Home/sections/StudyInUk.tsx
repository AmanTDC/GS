import Img from '@/shared/Img';
import React from 'react';

const StudyInUk = () => {
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

  return (
    <div className='gap-8 grid grid-cols-5' id='first'>
      <div className='space-y-3 md:col-span-3 col-span-5'>
        <h4 className='text-[32px] font-semibold mb-2'>
          Why Study in The United Kingdom?
        </h4>
        <p className='text-secondary'>
          Welcome to the UK - home to over 500,000 international students each
          year. Study at pioneering universities and gain skills that top global
          employers seek. Experience the culture that shaped the modern world.
          Join a diverse community of changemakers.
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
  );
};

export default StudyInUk;
