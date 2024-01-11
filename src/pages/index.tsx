import PageWrapper from '@/components/PageWrapper/PageWrapper';
import Home from '@/features/Home/Home';
import Img from '@/shared/Img';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    router.push('/courseResult');
  }, []);
  return (
    <div className='mt-7'>
      <div className='justify-center flex flex-col items-center space-y-8'>
        <Img
          src={'/images/LogoDark.png'}
          alt='phone'
          width={223}
          height={45}
          isLocal
          className='animate-pulse'
        />
        <div
          id='spinner'
          className='text-center top-[20%] z-10 w-[70px] h-[70px] rounded-[50%]'
        />
      </div>
    </div>
    // <PageWrapper isNavbar isBanner wrapperClass='!px-0 lg:!px-0'>
    //   <Home />
    // </PageWrapper>
  );
}
