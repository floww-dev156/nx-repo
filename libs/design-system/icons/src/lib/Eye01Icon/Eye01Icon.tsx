import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const Eye01Icon = (props: IconPropsType): React.ReactElement => {
  const {
    height = 20,
    stroke = colors['gray-700'],
    strokeWidth = '1.5',
    width = 20,
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M2.017 10.595c-.114-.18-.17-.27-.202-.409a.977.977 0 010-.372c.032-.138.088-.228.202-.408.938-1.485 3.73-5.239 7.983-5.239 4.255 0 7.046 3.754 7.984 5.239.113.18.17.27.202.408a.976.976 0 010 .373c-.032.138-.089.228-.202.408-.938 1.485-3.73 5.239-7.984 5.239s-7.045-3.754-7.983-5.24z"
      ></path>
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
      ></path>
    </svg>
  );
};

export default Eye01Icon;
