import React from 'react';

const LivingExpenses = ({ data, index }: { data: any; index: string }) => {
  return (
    <div id={index} className='space-y-3 my-16'>
      <h4 className='md:text-[32px] text-[28px] font-semibold'>{data?.title}</h4>
      <p className='text-secondary pb-3'>{data?.description}</p>

      <div className='overflow-x-scroll'>
        <table className='border w-full' id='scholarship'>
          <thead>
            <tr className='bg-yellow-50 text-yellow-700 font-semibold'>
              {data?.tableHeading?.map((item: string, idx: number) => (
                <th key={idx}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.tableBody?.map((item: any, idx: number) => (
              <tr key={idx}>
                <td>{item?.col1}</td>
                <td>{item?.col2}</td>
                <td>{item?.col3}</td>
                <td>{item?.col4}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className='text-secondary pb-3'>
        Please note that these costs are approximate and can vary widely based
        on factors such as your chosen institution, location, lifestyle, and
        personal spending habits. It's possible to reduce expenses with careful
        planning and budgeting.
      </p>
    </div>
  );
};

export default LivingExpenses;
