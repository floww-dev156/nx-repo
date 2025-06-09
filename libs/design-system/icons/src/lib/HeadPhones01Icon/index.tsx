import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const HeadPhones01Icon = (props: IconPropsType) => {
  const {
    fill = colors['green-light-600'],
    width = 24,
    height = 24,
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...rest}
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10v6.5a3.5 3.5 0 1 1-7 0v-2a3.5 3.5 0 0 1 5-3.163V12a8 8 0 1 0-16 0v1.337A3.5 3.5 0 0 1 9 16.5v2a3.5 3.5 0 1 1-7 0V12Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default HeadPhones01Icon;
