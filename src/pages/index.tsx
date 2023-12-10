import PageWrapper from '@/components/PageWrapper/PageWrapper';
import Home from '@/features/Home/Home';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    router.push('/uk');
  }, []);
  return <></>;
}
