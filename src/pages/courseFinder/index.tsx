import PageWrapper from '@/components/PageWrapper/PageWrapper';
import CourseFinder from '@/features/CourseFinder/CourseFinder';
import React from 'react';

const Index = () => {
  return (
    <PageWrapper isNavbar wrapperClass='!px-0 lg:!px-0'>
      <CourseFinder />
    </PageWrapper>
  );
};

export default Index;
