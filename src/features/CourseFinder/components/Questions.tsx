import Button from '@/shared/Button/Button';
import CountryCard from '@/shared/Cards/CountryCard';
import Img from '@/shared/Img';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Questions = ({
  data,
  index,
  action,
  navigation,
}: {
  data: any;
  index: number;
  action: (idx: number) => void;
  navigation?: boolean;
}) => {
  const [selected, setSelected] = useState<any>(-1);
  const [answers, setAnswers] = useState({
    country: '',
    degree: '',
    eduction: '',
    areaOfStudy: '',
  });
  const router = useRouter();
  const handleSubmit = () => {
    console.log({ navigation });

    if (navigation) {
      router.push('/courseResult');
    } else {
      index === 0
        ? setAnswers({
            ...answers,
            country: selected?.name,
          })
        : index === 1
        ? setAnswers({
            ...answers,
            degree: selected,
          })
        : index === 2
        ? setAnswers({
            ...answers,
            eduction: selected,
          })
        : index === 3
        ? setAnswers({
            ...answers,
            areaOfStudy: selected,
          })
        : null;
      action(index + 1);
      setSelected(-1);
    }
  };
  console.log({ answers });

  return (
    <div className='!mt-16 grid md:grid-cols-2 lg:gap-20 md:gap-5 gap-16 md:place-items-start place-items-center'>
      <Img
        src={data?.image}
        height={510}
        width={520}
        alt='heroImage'
        isLocal
        className='rounded-2xl'
      />
      <div className='space-y-8 p-6 pt-0'>
        <h1 className='text-[28px] font-semibold'>{data?.title}</h1>
        <div
          className={`${
            index === 3
              ? 'flex flex-wrap'
              : 'grid grid-cols-2 max-[420px]:grid-cols-1'
          } gap-8`}
        >
          {data?.options?.map((item: any, idx: number) => (
            <CountryCard
              data={item}
              onclick={() => setSelected(item)}
              selected={selected}
              key={idx}
            />
          ))}
        </div>
        <Button
          isDisabled={selected === -1}
          className='flex items-center !px-8 ml-auto !mt-16'
          onClick={handleSubmit}
        >
          Next
          <Img
            src={
              selected === -1
                ? '/icons/arrowRight.png'
                : '/icons/arrowRightLight.png'
            }
            height={18}
            width={18}
            alt='heroImage'
            isLocal
          />
        </Button>
      </div>
    </div>
  );
};

export default Questions;
