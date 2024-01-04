import Img from '@/shared/Img';
import React from 'react';

const Destinations = () => {
  const destinations = [
    {
      icon: '/icons/getStarted1.png',
      title: 'Schedule A Session',
      description:
        'During your first session, we will conduct an initial assessment of your goals and needs.',
    },
    {
      icon: '/icons/getStarted2.png',
      title: 'Initial Assessment',
      description:
        'During your first session, we will conduct an initial assessment of your goals and needs.',
    },
    {
      icon: '/icons/getStarted3.png',
      title: 'Personalized Guidance',
      description:
        'During your first session, we will conduct an initial assessment of your goals and needs.',
    },
    {
      icon: '/icons/getStarted4.png',
      title: 'Ongoing Support',
      description:
        'During your first session, we will conduct an initial assessment of your goals and needs.',
    },
  ];
  return (
    <div className='mt-12'>
      <div className='font-semibold text-center'>
        <div className='text-blue-500 w-fit mx-auto bg-blue-50 px-4 py-2 mb-2 rounded-lg'>
          COUNTRIES
        </div>
        <div className='text-[32px] md:text-[40px] max-w-[530px] mx-auto'>
          Explore & Learn More About Study Destinations
        </div>
      </div>
      <div className='grid lg:grid-cols-4 sm:grid-cols-2 place-items-center gap-6 mt-12'>
        {destinations?.map((item, idx) => (
          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front flex flex-col items-center px-4'>
                <div className='h-[111px] w-[111px] border border-[#E5E7EB] rounded-full flex justify-center items-center'>
                  <div className='h-[85px] w-[85px] flex justify-center rounded-full items-center bg-[linear-gradient(0deg,_#EBF3FE_0.74%,rgba(235,243,254,0.00)_100.74%)]'>
                    <Img
                      src={item?.icon}
                      height={46}
                      width={46}
                      alt='heroImage'
                      isLocal
                    />
                  </div>
                </div>
                <div className='h-8 w-8 flex -mt-[13px] text-[10px] font-semibold text-white items-center justify-center rounded-full bg-[#1E3A8A]'>
                  0{idx + 1}
                </div>
                <div className='w-full'>
                  <Img
                    src={'/icons/triangle.png'}
                    height={14}
                    width={35}
                    alt='heroImage'
                    isLocal
                    className='mx-auto mt-[14px]'
                  />
                  <div className='p-6 shadow-card text-center font-semibold rounded-[48px] border border-[#E5E7EB]'>
                    {item?.title}
                  </div>
                </div>
              </div>
              <div className='flip-card-back bg-white border border-[#E5E7EB] rounded-[40px] p-5 flex text-center flex-col justify-center items-center'>
                <div className='font-semibold'>{item?.title}</div>
                <p className='line-clamp-[7]'>{item?.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
