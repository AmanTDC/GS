import Img from '@/shared/Img';
import Modal from '@/shared/Modal/Modal';
import useScrollHidden from '@/utils/hooks/useScrollHidden';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
const RewardModal = ({
  close,
  title,
  subTitle,
  styleSubTitle,
  image,
}: {
  close: () => void;
  title: string;
  subTitle: string;
  styleSubTitle?: string;
  image?: string;
}) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(-1);
  useScrollHidden(isLoading === 0);
  const claimNow = () => {
    setIsLoading(0);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        { email },
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then((res) => {
        setIsLoading(1);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(-1);
      });
  };
  return (
    <Modal onClose={close} className='!bg-transparent animate-modal !p-5'>
      <div className='bg-[#1E3A8A] max-h-[880px] max-w-[1000px] overflow-hidden w-fit flex justify-center rounded-[37px] md:p-12 p-5 relative sm:w[586px]'>
        <div
          className='bg-[#D8E6FD] cursor-pointer h-8 w-8 md:h-12 md:w-12 rounded-full justify-center items-center md:top-5 top-4 flex absolute md:right-7 right-4'
          onClick={close}
        >
          <span className='md:text-4xl text-2xl text-[#1E3A8A] leading-[0] md:mb-3 mb-2'>
            &times;
          </span>
        </div>
        <div className='text-[#FAFAFA] text-center font-semibold '>
          <Img
            src='/images/testimonials.png'
            height={167}
            width={198}
            alt='heroImage'
            isLocal
            className='right-20 absolute top-0 opacity-50 rotate-180'
          />
          <div className='flex justify-center'>
            <Img
              src='/icons/confetti.png'
              width={194}
              height={376}
              alt='heroImage'
              isLocal
              className='sm:block hidden'
            />
            <div className='relative'>
              <Img
                src={image || '/icons/man.png'}
                height={378}
                width={364}
                alt='heroImage'
                isLocal
                className='relative z-10 sm:h-[398px] sm:min-w-[384px]'
              />
              <Img
                src='/icons/shadow.png'
                height={76}
                width={478}
                alt='heroImage'
                isLocal
                className='absolute -mt-7'
              />
            </div>
            <Img
              src='/icons/confetti1.png'
              width={218}
              height={423}
              alt='heroImage'
              isLocal
              className='sm:block hidden mt-10'
            />
          </div>
          <div className=''>
            <div className='mt-10 mb-7 md:text-[44px] sm:text-4xl text-3xl sm:leading-[62px]'>
              {title}
            </div>
          </div>
          <p className={`md:text-[26px] max-w-[719px] mx-auto sm:text-2xl ${styleSubTitle}`}>
            {subTitle}
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              claimNow();
            }}
            className='rounded-full w-full z-10 bg-white flex max-w-[627px] mx-auto items-center relative sm:h-16 h-10 mt-8'
          >
            <input
              type='email'
              placeholder='Enter Your Email'
              value={email}
              className='text-gray-400 sm:text-base text-sm rounded-full font-medium sm:mr-[220px] mr-16 w-full bg-white outline-none sm:h-16 h-10 p-5 pl-6'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type='submit'
              className='flex items-center justify-center cursor-pointer text-white gap-x-3 sm:p-5 absolute bg-[rgba(30,58,138,1)] hover:bg-[rgba(30,58,138,1)]/90 duration-500 sm:h-12 h-8 p-3 rounded-full sm:right-2 right-1'
            >
              {isLoading === 0 ? (
                <div className='sm:w-[149px] w-[78px]'>
                  <div id='loader' className='h-4 w-4 rounded-full mx-auto' />
                </div>
              ) : (
                <>
                  <Img
                    src='/icons/claimNow.png'
                    alt='send'
                    height={24}
                    width={24}
                    isLocal
                    className='max-[640px]:h-[18px] max-[640px]:w-[18px] sm:block hidden'
                  />
                  <h4 className='text-sm font-medium flex'>
                    Claim 300$ <span className='sm:block hidden pl-1'>Now</span>
                  </h4>
                </>
              )}
            </button>
          </form>
          <Img
            src='/images/testimonials.png'
            height={167}
            width={198}
            alt='heroImage'
            isLocal
            className='left-10 absolute bottom-0 opacity-50'
          />
        </div>
      </div>
    </Modal>
  );
};

export default RewardModal;
