import React from 'react';
import Img from '../Img';

const Tags = ({ icon, label }: { icon: string; label: string }) => {
  return (
    <div className='px-3 py-2 bg-blue-50 flex items-center gap-x-1 rounded-[10px] w-fit font-medium text-xs'>
      <Img src={icon} height={12} width={12} alt='heroImage' isLocal className='h-3 w-3' />
      {label}
    </div>
  );
};

export default Tags;
