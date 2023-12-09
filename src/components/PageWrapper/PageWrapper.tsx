import { FC, Fragment, PropsWithChildren, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { IoIosArrowUp } from 'react-icons/io';

interface IPageWraps {
  wrapperClass?: string;
  isBanner?: boolean;
}

const PageWrapper: FC<PropsWithChildren<IPageWraps>> = ({
  children,
  wrapperClass,
  isBanner,
}) => {
  const [isActive, setIsActive] = useState(false);
  const slideNav = () => {
    if (window.scrollY >= 100) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  typeof window !== 'undefined' && window.addEventListener('scroll', slideNav);
  return (
    <Fragment>
      <Navbar />
      <div className={`px-5 bg-white lg:px-[60px] ${wrapperClass}`}>
        {children}
      </div>
      {isActive && (
        <div
          className='w-12 h-8 hover:h-10 duration-300 bottom-0 right-10 rounded-t-md fixed cursor-pointer bg-blue-900 flex items-center justify-center'
          onClick={() => window.scroll(0, 0)}
        >
          <IoIosArrowUp color='white' />
        </div>
      )}
      <Footer isBanner={isBanner} />
    </Fragment>
  );
};

export default PageWrapper;
