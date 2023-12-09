import { FC, Fragment, PropsWithChildren } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

interface IPageWraps {
  wrapperClass?: string;
  isBanner?: boolean;
}

const PageWrapper: FC<PropsWithChildren<IPageWraps>> = ({
  children,
  wrapperClass,
  isBanner,
}) => {
  return (
    <Fragment>
      <Navbar />
      <div className={`px-5 bg-white lg:px-[60px] ${wrapperClass}`}>
        {children}
      </div>
      <Footer isBanner={isBanner} />
    </Fragment>
  );
};

export default PageWrapper;
