import PageWrapper from '@/components/PageWrapper/PageWrapper';
import Home from '@/features/Home/Home';
import { CountryData } from '@/utils/static/StaticData';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Index() {
  const router = useRouter();
  const [pageData, setPageData] = useState<any>();
  useEffect(() => {
    router?.query?.index === 'uk'
      ? setPageData(CountryData[0])
      : router?.query?.index === 'usa'
      ? setPageData(CountryData[1])
      : router?.query?.index === 'canada'
      ? setPageData(CountryData[2])
      : router?.query?.index === 'australia'
      ? setPageData(CountryData[3])
      : router?.query?.index === 'ireland'
      ? setPageData(CountryData[4])
      : router?.query?.index === 'nz'
      ? setPageData(CountryData[5])
      : null;
  }, [router]);

  return (
    <PageWrapper isBanner wrapperClass='!px-0 lg:!px-0'>
      <Home data={pageData} router={router} />
    </PageWrapper>
  );
}
