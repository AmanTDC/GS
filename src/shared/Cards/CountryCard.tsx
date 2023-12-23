import React from 'react';
import Img from '../Img';

const CountryCard = ({
  data,
  styleIcon,
  selected,
  onclick,
  className,
  styleName,
}: {
  data: any;
  styleIcon?: string;
  styleName?: string;
  className?: string;
  selected?: any;
  onclick?: () => void;
}) => {
  return (
    <div
      className={`border-[2px] cursor-pointer ${
        selected === data
          ? 'border-blue-500 bg-blue-50'
          : 'border-gray-200 bg-white'
      } rounded-3xl p-4 flex gap-x-2 ${className}`}
      onClick={onclick}
    >
      {data?.icon && (
        <Img
          src={data?.icon}
          height={24}
          width={24}
          alt='heroImage'
          isLocal
          className={`h-6 w-6 ${styleIcon}`}
        />
      )}
      <h4 className={`font-semibold ${styleName}`}>{data?.name || data}</h4>
    </div>
  );
};

export default CountryCard;
