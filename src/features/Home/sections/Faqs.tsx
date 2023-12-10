import Accordion from '@/shared/Accordion/Accordion';
import React from 'react';

const Faqs = ({ data, index }: { data: any; index: string }) => {
  return (
    <div id={index} className='my-16'>
      <h4 className='text-[32px] font-semibold mb-4'>
        Frequently Asked Questions
      </h4>
      <Accordion
        data={data?.map((item: any) => ({
          title: item.title,
          description: item?.description,
        }))}
      />
    </div>
  );
};

export default Faqs;
