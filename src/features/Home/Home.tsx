import Navbar from '@/components/Navbar/Navbar';
import Button from '@/shared/Button/Button';
import Img from '@/shared/Img';
import {
  STATS_SECTION,
  VERIFICATION_SLICK_SETTING,
} from '@/utils/constants/slickSliderSettings';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from '@/shared/Button/NavigationButtons';
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
  const destinations = [
    {
      icon: '/icons/getStarted1.png',
      title: 'Schedule A Session',
      description:
        'During your first session, we will conduct an initial assessment of your goals and needs.',
    },
    {
      icon: '/icons/getStarted2.png',
      title: 'Initial Assesment',
      description:
        'During your first session, we will conduct an initial assessment of your goals and needs.',
    },
    {
      icon: '/icons/getStarted3.png',
      title: 'Personalised Guidance',
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
  const testimonials = [
    {
      name: 'Bigyaan',
      designation: 'BSc Neuroscience UCLan',
      icon: '/icons/user.png',
      description:
        'Grateful to Global Scholars for unwavering support during my BSc in Neuroscience at UCLan. Their expertise and dedication enhanced my experience, playing a pivotal role in my academic achievements. I recommend them wholeheartedly for their commendable professionalism and outstanding contributions to my success.',
    },
    {
      name: 'Saadia',
      designation: 'LLB, University of Westminster',
      icon: '/icons/user2.png',
      description:
        "I'm grateful to the Global Scholars team for exceptional assistance in guiding me through the study abroad admission process. Their expertise and support were invaluable, securing my spot at this prestigious institution. I wholeheartedly recommend their services for a smooth and successful university admission.",
    },
  ];
  const countries = [
    {
      name: 'UK',
      icon: '/images/uk.png',
      image: '/images/country1.png',
    },
    {
      name: 'Australia',
      icon: '/images/australia.png',
      image: '/images/country2.png',
    },
    {
      name: 'Canada',
      icon: '/images/canada.png',
      image: '/images/country3.png',
    },
    {
      name: 'UK',
      icon: '/images/uk.png',
      image: '/images/country1.png',
    },
  ];
  return (
    <div className='mb-[400px]'>
      <Navbar color='text-white' />
      <div className="bg-[url('/images/homeBg.png')] bg-[length:90%_100%] h-[900px] max-[1024px]:h-screen bg-no-repeat flex items-center">
        <div className='lg:flex items-center lg:mt-0 mt-12 lg:space-y-0 space-y-16 md:justify-between justify-center space-x-10 max-w-[1240px] mx-auto px-5'>
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
      <div className='max-w-[1240px] mx-auto px-5 space-y-32 lg:mt-0 mt-20'>
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
      </div>
      <div className='bg-[#F8FBFF] px-5 my-16 py-16'>
        <div className='max-w-[1240px] mx-auto'>
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
                <div className='bg-white group h-full overflow-hidden shadow-card relative p-6 rounded-2xl'>
                  <div className='h-24 w-24 absolute -right-3 -top-3 rounded-full bg-blue-50 z-10 flex justify-center items-center'>
                    <Img
                      src={'/icons/handshake.png'}
                      height={48}
                      width={48}
                      alt='heroImage'
                      isLocal
                    />
                  </div>
                  <div className='space-y-3 mt-6 relative z-10'>
                    <h4 className='text-xl font-semibold'>{item?.title}</h4>
                    <p className='text-secondary'>{item?.description}</p>
                  </div>
                  <div className='absolute h-20 w-20 rounded-2xl group-hover:rounded-2xl group-hover:h-full group-hover:w-full duration-500 bg-blue-50 group-hover:top-0 group-hover:right-0 -top-3 -right-3' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto px-5 space-y-32'>
        <div className='space-y-12'>
          <div className='font-semibold text-center'>
            <div className='text-blue-500 w-fit mx-auto bg-blue-50 px-4 py-2 mb-2 rounded-lg'>
              COUNTRIES
            </div>
            <div className='text-[32px] md:text-[40px] max-w-[530px] mx-auto'>
              Explore & Learn More About Study Destinations
            </div>
          </div>
          <Slider
            {...VERIFICATION_SLICK_SETTING}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
          >
            {countries?.map((item, idx) => (
              <div key={idx} className='relative w-[362px] group mb-16'>
                <Img
                  src={item?.image}
                  height={420}
                  width={362}
                  alt='heroImage'
                  isLocal
                  className='max-h-[420px] rounded-2xl'
                />
                <div className='bg-[linear-gradient(180deg,rgba(30,58,138,0.00)_0%,#1E3A8A_91.32%)] h-full w-full rounded-2xl absolute group-hover:top-0 top-[-100%] duration-500'>
                  <div className='text-white h-full flex justify-center items-center text-[45px] font-semibold'>
                    {item?.name}
                  </div>
                </div>
                <div className='h-[92px] absolute -bottom-10 left-[37%] w-[92px] rounded-full bg-white flex items-center justify-center'>
                  <Img
                    src={item?.icon}
                    height={86}
                    width={86}
                    alt='heroImage'
                    isLocal
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
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
              <div className='flex flex-col items-center w-full max-w-[292px] group relative overflow-y-hidden px-4'>
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
                <div className='bg-white group-hover:shadow-card border border-[#E5E7EB] h-full w-[260px] rounded-[40px] p-5 flex text-center flex-col justify-center items-center absolute group-hover:top-0 top-[-100%] duration-500'>
                  <div className='font-semibold'>Initial Assesment</div>
                  <p>
                    During your first session, we will conduct an initial
                    assessment of your goals and needs.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-16'>
          <div className='font-semibold text-center'>
            <div className='text-blue-500 w-fit mx-auto bg-blue-50 px-4 py-2 mb-2 rounded-lg'>
              TESTIMONIALS
            </div>
            <div className='text-[32px] md:text-[40px] max-w-[530px] mx-auto'>
              Success Stories from Students Placed
            </div>
          </div>
          <Img
            src={'/images/testimonials.png'}
            height={272}
            width={324}
            alt='heroImage'
            isLocal
            className='absolute lg:block hidden right-0 -mt-52'
          />
          <div className='grid lg:grid-cols-2 mt-12 gap-[40px] place-items-center'>
            {testimonials?.map((item, idx) => (
              <div
                className='bg-[#F8FBFF] h-full rounded-2xl p-6 space-y-6 max-w-xl shadow-card'
                key={idx}
              >
                <Img
                  src={'/icons/quotes.png'}
                  height={53}
                  width={60}
                  alt='heroImage'
                  isLocal
                />
                <p className='text-xl font-medium'>{item?.description}</p>
                <div className='h-[1px] bg-[#3B82F6]'></div>
                <div className='flex items-center gap-x-3 flex-wrap'>
                  <Img
                    src={item?.icon}
                    height={80}
                    width={80}
                    alt='heroImage'
                    isLocal
                  />
                  <div>
                    <div className='font-semibold text-2xl'>{item?.name}</div>
                    <div className='font-semibold text-secondary'>
                      {item?.designation}
                    </div>
                  </div>
                  <div className='flex gap-x-3 ml-auto'>
                    {[1, 1, 1, 1, 1]?.map((item, idx) => (
                      <Img
                        src={'/icons/starGolden.png'}
                        height={24}
                        width={24}
                        alt='heroImage'
                        isLocal
                        key={idx}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
