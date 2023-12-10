import StudyCard from '@/shared/Cards/StudyCard';
import Img from '@/shared/Img';
import React from 'react';

const Intakes = ({
  data,
  countryName,
  index,
}: {
  data: any;
  countryName: string;
  index: string;
}) => {
  // const intakes = [
  //   {
  //     icon: '/images/greenLeaf.png',
  //     title: 'Spring Intake - Jan',
  //     content: [
  //       {
  //         key: 'INTAKE',
  //         value:
  //           'This admission intake happens in the month of January and ends till the month of February.',
  //       },
  //       {
  //         key: 'ADMISIIONS',
  //         value: 'June-September',
  //       },
  //     ],
  //   },
  //   {
  //     icon: '/images/orangeLeaf.png',
  //     title: 'Autumn Intake - Sep',
  //     content: [
  //       {
  //         key: 'INTAKE',
  //         value:
  //           'It happens in the month of September and lasts till October, Majority of the prominent universities and educational institutions of the UK take the enrollment of students in this intake.',
  //       },
  //       {
  //         key: 'ADMISIIONS',
  //         value: 'February-May',
  //       },
  //     ],
  //   },
  //   {
  //     icon: '/images/sun.png',
  //     title: 'Summer Intake - May',
  //     content: [
  //       {
  //         key: 'INTAKE',
  //         value:
  //           'This intake of admission occurs only in selected universities for some specific programs only, and that too not on a regular basis. This is a supplementary intake period.',
  //       },
  //       {
  //         key: 'ADMISIIONS',
  //         value: 'January-February',
  //       },
  //     ],
  //   },
  // ];
  return (
    <div id={index} className='space-y-3 mt-20 max-[700px]:mt-28'>
      <h4 className='text-[32px] font-semibold'>
        Intakes in the {countryName?.toUpperCase()}
      </h4>
      <p className='text-secondary pb-4'>{data?.description}</p>

      <div className='grid lg:grid-cols-3 grid-cols-12 gap-5 place-items-center'>
        {data?.data?.map((item: any, idx: number) => (
          <StudyCard
            key={idx}
            data={item}
            onlyThreeItems={data?.data?.length === 3 && idx === 2}
          />
        ))}
      </div>
    </div>
  );
};

export default Intakes;
