import PageWrapper from '@/components/PageWrapper/PageWrapper';
import CourseResult from '@/features/CourseFinder/CourseResult/CourseResult';
import React from 'react';

const Index = () => {
  return (
    <PageWrapper isNavbar wrapperClass='!px-0 lg:!px-0'>
      <CourseResult />
    </PageWrapper>
  );
};

export default Index;
