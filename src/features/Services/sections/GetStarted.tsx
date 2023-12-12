import Banner from '@/features/Home/sections/Banner';
import GetStartedCard from '@/shared/Cards/GetStartedCard';
import React from 'react';

const GetStarted = ({ index }: { index: string }) => {
  const data = [
    {
      icon: '/icons/getStarted1.png',
      title: 'Schedule A Session:',
      description:
        'You can schedule a FREE counseling session with our experts by simply filling out the contact form or using the chatbot on our website',
    },
    {
      icon: '/icons/getStarted2.png',
      title: 'Initial Assesment:',
      description:
        'During your first session, we will conduct an initial assessment of your goals and needs.',
    },
    {
      icon: '/icons/getStarted3.png',
      title: 'Personalised Guidance:',
      description:
        'Based on the assessment, we will provide you with a personalized roadmap for your study abroad journey.',
    },
    {
      icon: '/icons/getStarted4.png',
      title: 'Ongoing Support:',
      description:
        "We're here to support you at every step of the way, from initial consultations to post-departure assistance.",
    },
  ];

  const bannerData = {
    image: '/images/banner1.png',
    title: 'Claim Your £300 Reward Now',
    description: 'Enroll for a World-Class Education!',
    btnIcon: '/icons/claimNow.png',
    btnName: 'Claim Now',
  };

  return (
    <div className='space-y-7' id={index}>
      <h4 className='md:text-[32px] text-[28px] font-semibold mb-2'>How to Get Started</h4>
      {data?.map((item, idx) => (
        <GetStartedCard data={item} key={idx} />
      ))}
      <p className='text-sm text-black'>
        Don't let the complexities of studying abroad deter you from achieving
        your educational and career aspirations. With Global Scholar, your dream
        of global education is within reach. Take the first step today and
        embark on a journey that will shape your future.
      </p>
      <Banner
        data={bannerData}
        imageRight
        className='bg-[linear-gradient(0deg,#A8DADC_0%,#F1FAEE_100%)] !mt-16 !mx-0'
        styleTitle='text-black'
        styleDescription='text-black'
      />
    </div>
  );
};

export default GetStarted;
