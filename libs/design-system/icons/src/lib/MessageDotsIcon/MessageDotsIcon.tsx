import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const MessageDotsIcon = (props: IconPropsType) => {
  const { fill = colors['gray-700'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      {...rest}
      viewBox="0 0 16 16"
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 7h.007M8 7h.007M11 7h.007m-6.34 5v1.557c0 .355 0 .533.072.624.064.08.16.126.261.126.117 0 .256-.112.533-.334l1.59-1.272c.325-.26.488-.39.669-.482.16-.082.33-.142.507-.178.2-.041.407-.041.824-.041H10.8c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C14 10.48 14 9.92 14 8.8V5.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C12.48 2 11.92 2 10.8 2H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 3.52 2 4.08 2 5.2v4.133c0 .62 0 .93.068 1.185a2 2 0 0 0 1.414 1.414c.255.068.565.068 1.185.068Zm.666-5a.333.333 0 1 1-.666 0 .333.333 0 0 1 .666 0Zm3 0a.333.333 0 1 1-.666 0 .333.333 0 0 1 .666 0Zm3 0a.333.333 0 1 1-.666 0 .333.333 0 0 1 .666 0Z"
      />
    </svg>
  );
};

export default MessageDotsIcon;
