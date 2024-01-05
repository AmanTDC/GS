import { getCourses } from '@/utils/apis/api';
import useScrollHidden from '@/utils/hooks/useScrollHidden';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useCourseResult = () => {
  const [isActive, setIsActive] = useState<number>(-1);
  const [courses, setCourses] = useState<any>();
  useScrollHidden(isActive === 0);
  const router = useRouter();
  const [page, setPage] = useState(Number(router.query.page) || 1);
  const [totalPages, setTotalPages] = useState(1);
  const [updatedValues, setUpdatedValues] = useState<any>({
    country: [],
    level: [],
    duration: [],
    mode: [],
    type: [],
    program: [],
    intakes: [],
    defaultValues: {},
  });

  const filters = [
    {
      title: 'Country',
      key: 'country',
      options: [
        { value: 'UK', label: 'United Kingdom' },
        { value: 'USA', label: 'United States' },
        { value: 'CANADA', label: 'Canada' },
        { value: 'AUSTRALIA', label: 'Australia' },
        { value: 'IRELAND', label: 'Ireland' },
        { value: 'NZ', label: 'New Zealand' },
      ],
    },
    {
      title: 'Course Level',
      key: 'level',
      options: [
        { value: '12th', label: '12th' },
        { value: 'bachelors_degree', label: 'Bachelor’s Degree' },
        { value: 'masters_degree', label: 'Master’s Degree' },
        { value: 'phd', label: 'PhD' },
      ],
    },
    {
      title: 'Course Duration',
      key: 'duration',
      options: [
        { value: 'one', label: 'Less than 1 Year' },
        { value: 'two', label: '1 - 2 Years' },
        { value: 'three', label: '2 - 3 Years' },
        { value: 'four', label: '3+ Years' },
      ],
    },
    {
      title: 'Mode of Study',
      key: 'mode',
      options: [
        { value: 'fullTime', label: 'Full Time' },
        { value: 'halfTime', label: 'Half Time' },
        { value: 'internship', label: 'Internship' },
      ],
    },
    {
      title: 'Course Type',
      key: 'type',
      options: [
        { value: 'degree', label: 'Degree' },
        { value: 'diploma', label: 'Diploma' },
      ],
    },
    {
      title: 'Programs',
      key: 'program',
      options: [
        { value: 'Business & Management', label: 'Business & Management' },
        { value: 'Computer Science & IT', label: 'Computer Science & IT' },
        { value: 'Engineering', label: 'Engineering' },
        { value: 'Social Sciences', label: 'Social Sciences' },
        { value: 'Architecture', label: 'Architecture' },
        { value: 'Hospitality & Tourism', label: 'Hospitality & Tourism' },
        { value: 'Science', label: 'Science' },
        { value: 'Sports', label: 'Sports' },
        { value: 'Fine Arts', label: 'Fine Arts' },
        { value: 'Law', label: 'Law' },
        { value: 'Medicine', label: 'Medicine' },
        { value: 'Journalism & Media', label: 'Journalism & Media' },
        {
          value: 'Agriculture and Forestry',
          label: 'Agriculture and Forestry',
        },
      ],
    },
    {
      title: 'Intakes',
      key: 'intakes',
      options: [
        { value: 'Jan - Mar 2024', label: 'Jan - Mar 2024' },
        { value: 'Apr - Jun 2024', label: 'Apr - Jun 2024' },
        { value: 'Jul - Sep 2024', label: 'Jul - Sep 2024' },
        { value: 'Oct - Dec 2024', label: 'Oct - Dec 2024' },
        { value: 'Jan - Mar 2025', label: 'Jan - Mar 2025' },
        { value: 'Not Decided', label: 'Not Decided' },
      ],
    },
  ];

  const preSelectedFilters =
    router?.query?.data && JSON.parse(router?.query?.data as string);
  const fetchCourses = (filters?: any) => {
    setIsActive(2);
    window.scroll(0, 0);
    getCourses(page, 5, filters)
      .then((res) => {
        setIsActive(100);
        setCourses(res);
        router.push(
          `/courseResult`,
          {
            query: {
              page: page,
              data: router?.query?.data,
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
  console.log({ updatedValues: updatedValues });
  useEffect(() => {
    fetchCourses(updatedValues);
  }, [page, isActive !== 100]);

  useEffect(() => {
    setUpdatedValues({
      ...updatedValues,
      defaultValues: preSelectedFilters,
      country: preSelectedFilters?.country && [preSelectedFilters?.country],
      level: preSelectedFilters?.level && [preSelectedFilters?.level],
      duration: preSelectedFilters?.duration && [preSelectedFilters?.duration],
      mode: preSelectedFilters?.mode && [preSelectedFilters?.mode],
      type: preSelectedFilters?.type && [preSelectedFilters?.type],
      program: preSelectedFilters?.type && [preSelectedFilters?.type],
      intakes: preSelectedFilters?.intakes && [preSelectedFilters?.intakes],
    });
  }, []);

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
