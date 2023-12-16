import Navbar from '@/components/Navbar/Navbar';
import Button from '@/shared/Button/Button';
import Img from '@/shared/Img';
import { STATS_SECTION } from '@/utils/constants/slickSliderSettings';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Home = () => {
  const Universities = [
    '/images/homeSlider1.png',
    '/images/homeSlider2.png',
    '/images/homeSlider3.png',
    '/images/homeSlider4.png',
    '/images/homeSlider5.png',
  ];
  const services = [
    { image: '/images/homeServices0.png', name: 'Scholarship Guidance' },
    { image: '/images/homeServices1.png', name: 'Visa Application' },
    { image: '/images/homeServices2.png', name: 'Study Counselling' },
    { image: '/images/homeServices3.png', name: 'University Application' },
    { image: '/images/homeServices4.png', name: 'Student Accomodation' },
  ];
  const standOut = [
    {
      title: 'Direct Consultation',
      description:
        'There are many is variations of passage of lorem ipsum available but the majority',
    },
    {
      title: 'Cost Effective',
      description:
        'There are many is variations of passage of lorem ipsum available but the majority',
    },
    {
      title: '24/7 Support',
      description:
        'There are many is variations of passage of lorem ipsum available but the majority',
    },
    {
      title: '1000+ Happy Customers',
      description:
        'There are many is variations of passage of lorem ipsum available but the majority',
    },
  ];
  return (
    <div className='mb-[400px]'>
      <div className="bg-[url('/images/homeBg.png')] bg-[length:90%_100%] lg:h-screen bg-no-repeat">
        <Navbar color='text-white' />
        <div className='lg:flex items-center lg:mt-0 mt-12 lg:space-y-0 space-y-16 md:justify-between justify-center max-w-[1240px] mx-auto px-5'>
          <div className='text-white max-w-[644px] space-y-4'>
            <div className='text-xl font-medium'>
              Welcome to Global Scholar 👋
            </div>
            <div className='md:text-5xl text-4xl font-semibold !leading-[67px]'>
              Study Abroad With Reward: Your Global Future Awaits
            </div>
            <div className='text-xl font-medium mt-2'>
              Unlock Boundless Opportunities, Explore World-Class Universities,
              and Achieve Your Dreams Abroad
            </div>
            <div className='rounded-full w-full bg-white flex items-center relative h-16 my-4'>
              <input
                placeholder='Enter Your Email'
                className='text-gray-400 rounded-full font-medium sm:mr-[220px] mr-16 w-full bg-white outline-none h-16 p-5 pl-6'
              />
              <div className='flex items-center cursor-pointer text-white gap-x-3 p-5 absolute bg-[rgba(30,58,138,1)] hover:bg-[rgba(30,58,138,1)]/90 duration-500 h-12 rounded-full right-2'>
                <Img
                  src='/icons/claimNow.png'
                  alt='send'
                  height={24}
                  width={24}
                  isLocal
                />
                <h4 className='text-sm font-medium sm:block hidden'>
                  Claim 300$ Now
                </h4>
              </div>
            </div>
            <div className='flex font-semibold items-center gap-x-8'>
              <div>
                <div className='md:text-[32px] text-[28px]'>₹5,00,00</div>
                <div className='text-xl'>Scholarships</div>
              </div>
              <div className='w-[1px] h-12 bg-white/50'></div>
              <div>
                <div className='md:text-[32px] text-[28px]'>5000+</div>
                <div className='text-xl'>Learners On-Campus Abroad</div>
              </div>
            </div>
          </div>
          <Img
            src={'/images/homeHero.png'}
            height={528}
            width={470}
            alt='heroImage'
            isLocal
            className='mx-auto'
          />
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto px-5 space-y-20 lg:mt-0 mt-20'>
        <div className='font-semibold text-center'>
          <div className='text-blue-500 w-fit mx-auto bg-blue-50 px-4 py-2 mb-2 rounded-lg'>
            5000+ TOP UNIVERSITIES
          </div>
          <div className='text-[32px] md:text-[40px] text-black mb-9'>
            Enroll in the Best Universities Around the Globe
          </div>
          <Slider {...STATS_SECTION} centerMode>
            {Universities?.map((item, idx) => (
              <Img
                src={item}
                height={48}
                width={200}
                alt='heroImage'
                isLocal
                key={idx}
                className='h-12 !w-fit max-w[200px]'
              />
            ))}
          </Slider>
        </div>
        <div className='grid grid-cols-12 gap-y-12 gap-x-5 place-items-center'>
          <div className='font-semibold lg:col-span-6 col-span-12 lg:text-start text-center'>
            <div className='text-blue-500 w-fit lg:mx-0 mx-auto bg-blue-50 px-4 py-2 mb-2 rounded-lg'>
              WHAT WE OFFER
            </div>
            <div className='text-[32px] md:text-[40px]'>
              Our Best In Class Services For Our Students
            </div>
            <div className='text-lg font-normal'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod enim tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          {services?.map((item, idx) => (
            <div
              key={idx}
              className='relative max-w-[300px] lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12'
            >
              <div className='relative'>
                <div className='z-10 h-[250px] w-[250px] rounded-2xl bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_59.37%,#000_100%)] absolute'></div>
                <Img
                  src={item?.image}
                  height={250}
                  width={250}
                  alt='heroImage'
                  isLocal
                  className='h-[250px] w-[250px]'
                />
              </div>
              <h4 className='text-[#fafafa] bottom-3 z-20 left-4 font-medium absolute'>
                {item?.name}
              </h4>
            </div>
          ))}
          <div className='lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 bg-[#1E3A8A] h-[250px] rounded-2xl w-[250px] relative'>
            <Img
              src='/images/homeServiceBg.png'
              height={240}
              width={248}
              alt='heroImage'
              isLocal
            />
            <div className='absolute left-7 max-w-[195px] top-8 h-[250px] w-[200px]'>
              <div className='text-white font-semibold text-xl'>
                No Consulting Fees, Just Dreams Fulfiled!
              </div>
              <Button className='bg-white group hover:bg-blue-500 mt-16'>
                <div className='text-blue-800 group-hover:text-white'>
                  Get Started
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div className='font-semibold text-center'>
            <div className='text-blue-500 w-fit mx-auto bg-blue-50 px-4 py-2 mb-2 rounded-lg'>
              WHY CHOOSE US
            </div>
            <div className='text-[32px] md:text-[40px]'>
              What Makes Us Stand Out
            </div>
          </div>
          <Img
            src={'/images/standOut.png'}
            height={272}
            width={324}
            alt='heroImage'
            isLocal
            className='absolute lg:block hidden left-0 -mt-16'
          />
          <div className='sm:flex gap-x-6 sm:space-y-0 space-y-6 mt-12'>
            <div className='bg-[#1E3A8A] rounded-2xl h-full max-w-[370px] mx-auto w-full relative'>
              <Img
                src='/images/standOutCardBg.png'
                height={370}
                width={370}
                alt='heroImage'
                isLocal
                className='absolute right-0 top-0'
              />
              <div className='px-10 py-12 space-y-8'>
                <div className='text-[#B4C0E1] text-sm font-semibold'>
                  BEAT THE OLD WAY
                </div>
                <div className='text-white font-semibold md:text-[32px] text-[28px]'>
                  Why you should choose the only quality consultation
                </div>
                <Button className='bg-white group w-full hover:bg-[#1E3A8A]'>
                  <div className='text-[#1E3A8A] group-hover:text-white'>
                    Get Free Consultation
                  </div>
                </Button>
              </div>
            </div>
            <div className='grid lg:grid-cols-2 gap-6'>
              {standOut?.map((item, idx) => (
                <div className='bg-white space-y-3 h-full overflow-hidden shadow-card relative p-6 rounded-2xl'>
                  <div className='h-24 w-24 absolute -right-3 -top-3 rounded-full bg-blue-50 flex justify-center items-center'>
                    <Img
                      src={'/icons/handshake.png'}
                      height={48}
                      width={48}
                      alt='heroImage'
                      isLocal
                    />
                  </div>
                  <h4 className='text-xl font-semibold !mt-6'>{item?.title}</h4>
                  <p className='text-secondary'>{item?.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
