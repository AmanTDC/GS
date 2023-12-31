import PageWrapper from '@/components/PageWrapper/PageWrapper';
import Home from '@/features/Home/Home';

export default function Index() {
  // const router = useRouter();
  // useEffect(() => {
  //   router.push('/uk');
  // }, []);
  return (
    // <div className='mt-7' id='loader'>
    //   <div className='justify-center flex flex-col items-center space-y-8'>
    //     <Img
    //       src={'/images/LogoDark.png'}
    //       alt='phone'
    //       width={223}
    //       height={45}
    //       isLocal
    //     />
    //     <div
    //       id='spinner'
    //       className='text-center top-[20%] z-10 w-[70px] h-[70px] rounded-[50%]'
    //     />
    //   </div>
    // </div>
    <PageWrapper isNavbar isBanner wrapperClass='!px-0 lg:!px-0'>
      <Home />
    </PageWrapper>
  );
}
