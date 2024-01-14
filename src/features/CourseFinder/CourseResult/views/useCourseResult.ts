import { getCourses } from '@/utils/apis/api';
import useScrollHidden from '@/utils/hooks/useScrollHidden';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useCourseResult = () => {
  const [isActive, setIsActive] = useState<number>(-1);
  const [courses, setCourses] = useState<any>();
  useScrollHidden(isActive === 0);
  const router = useRouter();
  const [page, setPage] = useState(Number(router?.query?.page) || 1);
  const [totalPages, setTotalPages] = useState(1);
  const [updatedValues, setUpdatedValues] = useState<any>({
    country: [],
    level: [],
    duration: [],
    stream: [],
    intakes: [],
    defaultValues: {},
  });

  const filters = [
    {
      title: 'Country',
      key: 'country',
      options: [
        { value: 'GB', label: 'United Kingdom' },
        { value: 'US', label: 'United States' },
        { value: 'CA', label: 'Canada' },
        { value: 'AU', label: 'Australia' },
        { value: 'IE', label: 'Ireland' },
        // { value: 'NZ', label: 'New Zealand' },
      ],
    },

    {
      title: 'Course Level',
      key: 'level',
      options: [
        { value: 'Bachelor', label: 'Bachelor’s Degree' },
        { value: 'Diploma', label: 'Diploma' },
        { value: 'Masters', label: 'Master’s Degree' },
        { value: 'PhD', label: 'PhD' },
        { value: 'Post Graduate', label: 'Post Graduate' },
        { value: 'Non-Credential', label: 'Non-Credential' },
        { value: 'Certificate', label: 'Certificate' },
      ],
    },
    {
      title: 'Course Duration',
      key: 'duration',
      options: [
        { value: '0-12', label: 'Less than 1 Year' },
        { value: '12-24', label: '1 - 2 Years' },
        { value: '24-36', label: '2 - 3 Years' },
        { value: '36', label: '3+ Years' },
      ],
    },
    {
      title: 'Stream',
      key: 'stream',
      options: [
        { value: 'Sciences', label: 'Sciences' },
        {
          value: 'Business Management and Economics',
          label: 'Business Management and Economics',
        },
        { value: 'Arts', label: 'Arts' },
        {
          value: 'Engineering and Technology',
          label: 'Engineering and Technology',
        },
        { value: 'Social Sciences', label: 'Social Sciences' },
        { value: 'English', label: 'English' },
        { value: 'Medical', label: 'Medical' },
      ],
    },

    {
      title: 'Tuition Fee',
      key: 'tuitionFee',
      options: [
        { value: '0 to 1,000', label: '0 to 1,000' },
        { value: '1,001 to 5,000', label: '1,001 to 5,000' },
        { value: '5,001 to 10,000', label: '5,001 to 10,000' },
        { value: '10,001 to 20,000', label: '10,001 to 20,000' },
        { value: '20,001 to 35,000', label: '20,001 to 35,000' },
        { value: '35,001+', label: '35,001+' },
      ],
    },
    {
      title: 'Intakes',
      key: 'intakes',
      options: [
        { value: 'Jan 2024;Feb 2024;Mar 2024', label: 'Jan - Mar 2024' },
        { value: 'Apr 2024;May 2024;Jun 2024', label: 'Apr - Jun 2024' },
        { value: 'Jul 2024;Aug 2024;Sep 2024', label: 'Jul - Sep 2024' },
        { value: 'Oct 2024;Nov 2024;Dec 2024', label: 'Oct - Dec 2024' },
        { value: 'Jan 2025;Feb 2025;Mar 2025', label: 'Jan - Mar 2025' },
        { value: 'Not Decided', label: 'Not Decided' },
      ],
    },
  ];

  const preSelectedFilters =
    router?.query?.data && JSON.parse(router?.query?.data as string);
  console.log({ preSelectedFilters });

  const fetchCourses = (filters?: any) => {
    setIsActive(2);
    window.scroll(0, 0);
    getCourses(page, 5, filters)
      .then((res) => {
        setIsActive(-1);
        setCourses(res);
        router.push(
          `/courseResult`,
          {
            query: {
              page: page,
              // data: router?.query?.data,
            },
          },
          {
            scroll: false,
          }
        );

        setTotalPages(res?.pagiation?.totalPages);
      })
      .catch((err) => {
        console.log(err);
        setIsActive(-1);
      });
  };

  useEffect(() => {
    setUpdatedValues({
      ...updatedValues,
      defaultValues: preSelectedFilters,
      country: preSelectedFilters?.country && [preSelectedFilters?.country],
      level: preSelectedFilters?.level && [preSelectedFilters?.level],
      duration: preSelectedFilters?.duration && [preSelectedFilters?.duration],
      stream: preSelectedFilters?.type && [preSelectedFilters?.type],
      intakes: preSelectedFilters?.intakes && [preSelectedFilters?.intakes],
    });
  }, []);
  useEffect(() => {
    preSelectedFilters
      ? updatedValues?.country?.length > 0 && fetchCourses(updatedValues)
      : fetchCourses(updatedValues);
  }, [page, updatedValues?.defaultValues]);

  const extractValue = (data: any, key: string) => {
    setUpdatedValues({
      ...updatedValues,
      [key]: data,
    });
  };

  const applyFilters = () => {
    fetchCourses(updatedValues);
  };

  return {
    isActive,
    setIsActive,
    page,
    setPage,
    totalPages,
    setTotalPages,
    filters,
    courses,
    extractValue,
    applyFilters,
    updatedValues,
    setUpdatedValues,
  };
};

export default useCourseResult;
