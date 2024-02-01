import PageWrapper from '@/components/PageWrapper/PageWrapper';
import StaticPages from '@/features/StaticPages/StaticPages';
import { TermsCondition } from '@/utils/static/StaticData';
import React from 'react';

const Index = () => {
  return (
    <PageWrapper wrapperClass='!px-0 lg:!px-0'>
      <StaticPages data={TermsCondition} title='Privacy Policy' />
    </PageWrapper>
  );
};

export default Index;
