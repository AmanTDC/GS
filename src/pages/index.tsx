import PageWrapper from '@/components/PageWrapper/PageWrapper';
import Home from '@/features/Home/Home';

export default function Index() {
  return (
    <PageWrapper isBanner wrapperClass='!px-0 lg:!px-0'>
      <Home />
    </PageWrapper>
  );
}
