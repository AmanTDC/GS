import StudyCard from '@/shared/Cards/StudyCard';
import Img from '@/shared/Img';
import React from 'react';

const UkIntakes = () => {
  const intakes = [
    {
      icon: '/images/greenLeaf.png',
      title: 'Spring Intake - Jan',
      content: [
        {
          key: 'INTAKE',
          value:
            'This admission intake happens in the month of January and ends till the month of February.',
        },
        {
          key: 'ADMISIIONS',
          value: 'June-September',
        },
      ],
    },
    {
      icon: '/images/orangeLeaf.png',
      title: 'Autumn Intake - Sep',
      content: [
        {
          key: 'INTAKE',
          value:
            'It happens in the month of September and lasts till October, Majority of the prominent universities and educational institutions of the UK take the enrollment of students in this intake.',
        },
        {
          key: 'ADMISIIONS',
          value: 'February-May',
        },
      ],
    },
    {
      icon: '/images/sun.png',
      title: 'Summer Intake - May',
      content: [
        {
          key: 'INTAKE',
          value:
            'This intake of admission occurs only in selected universities for some specific programs only, and that too not on a regular basis. This is a supplementary intake period.',
        },
        {
          key: 'ADMISIIONS',
          value: 'January-February',
        },
      ],
    },
  ];
  return (
    <div id='third' className='space-y-3 mt-20 max-[700px]:mt-28'>
      <h4 className='text-[32px] font-semibold'>Intakes in the UK</h4>
      <p className='text-secondary pb-4'>
        UK universities offer multiple admission intakes throughout the year,
        granting international students greater flexibility. These admission
        windows typically align with the academic calendar, with major intakes
        in September and January. Some institutions also offer additional
        intakes in April and May. This flexibility allows international students
        to plan their studies in the UK that best fit their schedules and
        academic goals. It's advisable to consult specific universities for
        detailed information on intake options and application deadlines.
      </p>

      <div className='grid lg:grid-cols-3 grid-cols-12 gap-5 place-items-center'>
        {intakes?.map((item, idx) => (
          <StudyCard
            key={idx}
            data={item}
            onlyThreeItems={intakes?.length === 3 && idx === 2}
          />
        ))}
      </div>
    </div>
  );
};

export default UkIntakes;
