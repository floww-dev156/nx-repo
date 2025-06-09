import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const ArrowNarrowLeftIcon = (props: IconPropsType) => {
  const { stroke = colors['primary-600'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      {...rest}
      viewBox="0 0 20 20"
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.667}
        d="M16.667 10H3.333m0 0 5 5m-5-5 5-5"
      />
    </svg>
  );
};

export { ArrowNarrowLeftIcon };
