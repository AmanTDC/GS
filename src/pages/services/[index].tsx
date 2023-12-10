import PageWrapper from '@/components/PageWrapper/PageWrapper';
import Services from '@/features/Services/Services';
import { ServicesData } from '@/utils/static/StaticData';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Index = () => {
  const router = useRouter();
  const [pageData, setPageData] = useState<any>();
  useEffect(() => {
    router?.query?.index === 'study-abroad'
      ? setPageData(ServicesData?.studyAbroad)
      : router?.query?.index === 'visa'
      ? setPageData(ServicesData?.visa)
      : router?.query?.index === 'application'
      ? setPageData(ServicesData?.application)
      : router?.query?.index === 'scholarships'
      ? setPageData(ServicesData?.scholarships)
      : router?.query?.index === 'accomodation'
      ? setPageData(ServicesData?.application)
      : null;
  }, [router]);

  return (
    <PageWrapper wrapperClass='!px-0 lg:!px-0'>
      <Services data={pageData} />
    </PageWrapper>
  );
};

export default Index;
