import Img from '@/shared/Img';
import Modal from '@/shared/Modal/Modal';
import React from 'react';

const SuccessModal = ({
  close,
  title,
  subTitle,
}: {
  close: () => void;
  title: string;
  subTitle: string;
}) => {
  return (
    <Modal onClose={close} className='!bg-transparent animate-modal !p-5'>
      <div className='bg-[#1E3A8A] w-fit flex justify-center rounded-[37px] md:p-12 p-5 relative sm:w-[586px]'>
        <div
          className='bg-[#D8E6FD] cursor-pointer h-8 w-8 md:h-12 md:w-12 rounded-full justify-center items-center md:top-5 top-4 flex absolute md:right-7 right-4'
          onClick={close}
        >
          <span className='md:text-4xl text-2xl text-[#1E3A8A] leading-[0] md:mb-3 mb-2'>
            &times;
          </span>
        </div>
        <div className='text-[#FAFAFA] text-center font-semibold max-w-[448px]'>
          <Img
            src='/images/logo.png'
            height={200}
            width={215}
            alt='heroImage'
            isLocal
            className='mx-auto animate-pulse max-[640px]:h-40 max-[640px]:w-44'
          />
          <div className='mt-10 mb-7 md:text-[44px] text-4xl sm:leading-[62px]'>{title}</div>
          <p className='md:text-[26px] text-2xl'>{subTitle}</p>
          <Img
            src='/images/testimonials.png'
            height={204}
            width={242}
            alt='heroImage'
            isLocal
            className='left-5 absolute bottom-0 opacity-50'
          />
        </div>
      </div>
    </Modal>
  );
};

export default SuccessModal;
