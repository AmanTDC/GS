import React from 'react';

const CostOfStudy = ({ data, index }: { data: any; index: string }) => {
  return (
    <div id={index} className='space-y-3 my-16'>
      <h4 className='text-[32px] font-semibold'>{data?.title}</h4>
      <p className='text-secondary pb-3'>{data?.description}</p>
      <table className='border w-full' id='costOfStudy'>
        <thead>
          <tr className='bg-green-50 text-green-800 font-semibold'>
            {data?.tableHeading?.map((item: string, idx: number) => (
              <th key={idx}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.tableBody?.map((item: any, idx: number) => (
            <tr>
              <td>{item?.col1}</td>
              <td>{item?.col2}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className='text-secondary pb-3'>
        Please note that these costs are approximate and can vary widely based
        on factors such as your chosen institution, location, lifestyle, and
        personal spending habits. It's possible to reduce expenses with careful
        planning and budgeting.
      </p>
    </div>
  );
};

export default CostOfStudy;
