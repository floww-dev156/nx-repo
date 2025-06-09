import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const HeadPhones01OutlineIcon = (props: IconPropsType): React.ReactElement => {
  const {
    height = 20,
    stroke = colors['gray-700'],
    strokeWidth = '1.667',
    width = 20,
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M17.5 15v-5a7.5 7.5 0 00-15 0v5m2.083 2.5A2.083 2.083 0 012.5 15.417V13.75a2.083 2.083 0 114.167 0v1.667c0 1.15-.933 2.083-2.084 2.083zm10.834 0a2.083 2.083 0 01-2.084-2.083V13.75a2.083 2.083 0 014.167 0v1.667c0 1.15-.933 2.083-2.083 2.083z"
      ></path>
    </svg>
  );
};

export default HeadPhones01OutlineIcon;
