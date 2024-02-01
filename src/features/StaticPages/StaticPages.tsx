import BackBtn from '@/shared/Button/BackBtn';
import Img from '@/shared/Img';
import React from 'react';

const StaticPages = ({ data, title }: { data: any; title: string }) => {
  return (
    <div className='container relative mx-auto mt-6 mb-14 text-dark sm:mt-10 sm:mb-28 flex flex-col'>
      <div className='sm:mx-10'>
        <BackBtn />
        <h1 className='my-6 font-vollkorn text-3xl font-bold md:my-10 md:text-5xl'>
          {title}
        </h1>
        <Img
          src='/images/usHero.png'
          height={180}
          width={180}
          alt='termsImage'
          className='absolute -top-8 right-9 hidden md:block'
          isLocal
        />
      </div>
      <div className='space-y-5 bg-[#f2f2f2] p-3 sm:p-10'>
        {data?.map((item: any, idx: number) => (
          <div key={idx} className='space-y-2'>
            <h4 className='text-xl font-semibold'>
              {idx + 1 + '. ' + item?.title}
            </h4>

            {item?.description ? (
              <div className='space-y-2 text-sm'>
                {item?.description?.map((item1: any, idx1: number) =>
                  typeof item1 === 'object' ? (
                    <div className='space-y-1'>
                      <p key={idx1}>
                        {`${idx + 1}.${idx1 + 1} ` + item1?.text}
                      </p>
                      <div className='space-y-1'>
                        {item1?.list?.map((item2: string, idx2: number) => (
                          <div key={idx2}>{item2}</div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p key={idx1}>{`${idx + 1}.${idx1 + 1} ` + item1}</p>
                  )
                )}
              </div>
            ) : item?.table ? (
              <table className='border'>
                <thead className='bg-black text-white'>
                  <th>Data Type</th>
                  <th>Details of Data Collected</th>
                </thead>
                <tbody>
                  {item?.table?.map((item3: any, idx3: number) => (
                    <tr key={idx3}>
                      <td>{item3?.type}</td>
                      <td>{item3?.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaticPages;
