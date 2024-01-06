import Img from '@/shared/Img';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import SuccessModal from '@/components/Modal/SuccessModal';
import useScrollHidden from '@/utils/hooks/useScrollHidden';

const Banner = ({
  data,
  imageRight,
  className,
  styleTitle,
  styleDescription,
  styleImage,
}: {
  data: any;
  imageRight?: boolean;
  className?: string;
  styleTitle?: string;
  styleDescription?: string;
  styleImage?: string;
}) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(-1);
  const claimNow = () => {
    setIsLoading(0);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        { email },
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then((res) => setIsLoading(1))
      .catch((err) => {
        console.log(err);
        setIsLoading(-1);
      });
  };
  useScrollHidden(isLoading === 1);
  return (
    <div className='relative'>
      <Img
        src={data?.image}
        height={357}
        width={361}
        alt='heroImage'
        isLocal
        className={`absolute -top-20 right-[calc(100%-40%)] ${
          imageRight ? 'hidden' : 'lg:block hidden'
        } h-[357px] w-[361px] ${styleImage}`}
      />
      <div
        className={`rounded-3xl bg-blue-500 lg:px-10 md:mx-10 z-10 mb-16 flex flex-col justify-center ${className}`}
      >
        <div
          className={`space-y-4 max-w-[591px] ${
            imageRight ? '' : 'lg:ml-auto'
          } max-[1024px]:mx-auto w-full py-6 px-5`}
        >
          <h4
            className={`md:text-[32px] text-[28px] text-[#fafafa] font-semibold max-w-[500px] ${styleTitle}`}
          >
            {data?.title}
          </h4>
          <p
            className={`text-lg text-[#F9FAFB] font-medium pb-2 ${styleDescription}`}
          >
            {data?.description}
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              claimNow();
            }}
            className='rounded-full w-full bg-white flex items-center relative h-16'
          >
            <input
              type='email'
              placeholder='Enter Your Email'
              value={email}
              className='text-gray-400 rounded-full font-medium sm:mr-[220px] mr-16 w-full bg-white outline-none h-16 p-5 pl-6'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type='submit'
              className='flex items-center cursor-pointer text-white gap-x-3 p-5 absolute bg-[rgba(30,58,138,1)] hover:bg-[rgba(30,58,138,1)]/90 duration-500 h-12 rounded-full right-2'
            >
              {isLoading === 0 ? (
                <div className='sm:w-[182px] w-6'>
                  <div id='loader' className='h-4 w-4 rounded-full mx-auto' />
                </div>
              ) : (
                <>
                  <Img
                    src={data?.btnIcon}
                    alt='send'
                    height={24}
                    width={24}
                    isLocal
                  />
                  <h4 className='text-sm font-medium sm:block hidden'>
                    {data?.btnName}
                  </h4>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
      <Img
        src={data?.image}
        height={357}
        width={361}
        alt='heroImage'
        isLocal
        className={`absolute bottom-0 left-[calc(100%-40%)] ${
          imageRight ? 'lg:block hidden' : 'hidden'
        } h-[357px] w-[361px] ${styleImage}`}
      />
      {isLoading === 1 && (
        <SuccessModal
          title='You’ll be Rewarded 🤑'
          subTitle='Our counselors will get in touch with you shortly
        '
          close={() => setIsLoading(-1)}
        />
      )}
    </div>
  );
};

export default Banner;
