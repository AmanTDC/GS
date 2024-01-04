import Button from '@/shared/Button/Button';
import CountryCard from '@/shared/Cards/CountryCard';
import Img from '@/shared/Img';
import React from 'react';
import useQuestions from './views/useQuestions';
import { errorType, touchedType, inputType } from '@/utils/constants/Functions';

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
  const {
    onSubmit,
    values,
    errors,
    handleBlur,
    handleChange,
    setFieldValue,
    touched,
    selected,
    setSelected,
    isLoading,
    router,
    answers,
  } = useQuestions(index, action);

  return (
    <div className='!mt-16 flex lg:flex-row flex-col lg:items-start items-center md:gap-20 sm:gap-16 gap-10'>
      <Img
        src={data?.image}
        height={510}
        width={430}
        alt='heroImage'
        isLocal
        className='rounded-2xl lg:max-w-[430px] lg:h-[510px]'
      />
      <div className='space-y-8 p-6 sm:pt-0 w-full sm:bg-transparent bg-blue-50  rounded-3xl'>
        <h1 className='text-[28px] font-semibold'>{data?.title}</h1>
        {navigation ? (
          <div className='space-y-4 mt-6'>
            {data?.inputs?.map((item: any, idx: number) => (
              <div className='space-y-1' key={idx}>
                <h4 className='text-xs font-medium'>
                  {item?.label} <span className='text-red-600'>*</span>
                </h4>
                <div className='relative'>
                  <input
                    type={item?.type}
                    placeholder={item?.placeholder}
                    className={`h-10 rounded-md text-sm pl-10 outline-none w-full border ${
                      errorType(idx, errors) && touchedType(idx, touched)
                        ? 'border-red-600'
                        : 'border-gray-200'
                    }`}
                    onChange={handleChange(
                      idx === 0 ? 'name' : idx === 1 ? 'email' : 'phone'
                    )}
                    onBlur={handleBlur(
                      idx === 0 ? 'name' : idx === 1 ? 'email' : 'phone'
                    )}
                    value={inputType(idx, values)}
                  />
                  {errorType(idx, errors) && touchedType(idx, touched) ? (
                    <p className='text-red-500 text-[10px] text-right'>
                      {errorType(idx, errors) || (
                        <p className='text-white text-[10px] text-right'>.</p>
                      )}
                    </p>
                  ) : (
                    <p className='text-white text-[10px] text-right'>.</p>
                  )}
                  <Img
                    src={item?.icon}
                    height={16}
                    width={16}
                    alt='heroImage'
                    isLocal
                    className='absolute top-3 left-4'
                  />
                </div>
              </div>
            ))}
            <div className='flex items-center gap-x-2'>
              <input
                type='checkbox'
                className='h-4 w-4 cursor-pointer'
                onChange={(e) => setFieldValue('checkbox', e.target.checked)}
              />
              <p className='text-xs text-gray-600'>
                By clicking you agree to our{' '}
                <span className='text-[#007DFC]'>Privacy Policy</span> and
                <span className='text-[#007DFC]'>Terms & Conditions</span>{' '}
                <span className='text-red-600'>*</span>
              </p>
            </div>
          </div>
        ) : (
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
        )}
        <Button
          // isDisabled={
          //   navigation
          //     ? values?.email &&
          //       values?.phone &&
          //       values.name &&
          //       values.checkbox &&
          //       !errors?.email &&
          //       !errors?.phone &&
          //       !errors?.name
          //       ? false
          //       : true
          //     : selected === -1
          // }
          className={`flex items-center !px-6 ml-auto !mt-16 ${
            navigation && 'min-w-[170px]'
          }`}
          // onClick={() => (navigation ? handleSubmit() : onSubmit())}
          onClick={() =>
            navigation
              ? router.push({
                  pathname: '/courseResult',
                  query: { data: JSON.stringify(answers) },
                })
              : onSubmit()
          }
          isLoading={isLoading}
        >
          {navigation ? 'View Courses' : 'Next'}
          <Img
            src={
              (
                navigation
                  ? values?.email &&
                    values?.phone &&
                    values?.name &&
                    values?.checkbox &&
                    !errors?.email &&
                    !errors?.phone &&
                    !errors?.name
                  : selected !== -1
              )
                ? '/icons/arrowRightLight.png'
                : '/icons/arrowRight.png'
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
