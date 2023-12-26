import Img from '@/shared/Img';
import React from 'react';

const Testimonials = () => {
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
  return (
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
            <p className='text-lg font-medium'>{item?.description}</p>
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
                <div className='font-semibold text-xl'>{item?.name}</div>
                <div className='font-semibold text-sm text-secondary'>
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
  );
};

export default Testimonials;
