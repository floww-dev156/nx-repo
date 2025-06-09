import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const MarkerPin01Icon = (props: IconPropsType): React.ReactElement => {
  const { height = 20, fill = colors['gray-500'], width = 20 } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M9 2.25A5.25 5.25 0 003.75 7.5c0 1.42.64 2.758 1.72 4.16.91 1.183 2.077 2.34 3.33 3.582l.2.2.2-.2c1.253-1.242 2.42-2.399 3.33-3.582 1.08-1.402 1.72-2.74 1.72-4.16 0-2.9-2.35-5.25-5.25-5.25zM2.25 7.5a6.75 6.75 0 0113.5 0c0 1.895-.86 3.555-2.03 5.075-.979 1.27-2.231 2.512-3.482 3.752l-.708.703a.75.75 0 01-1.06 0l-.708-.703c-1.25-1.24-2.503-2.482-3.481-3.752C3.11 11.055 2.25 9.395 2.25 7.5zM9 6a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM6 7.5a3 3 0 116 0 3 3 0 01-6 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default MarkerPin01Icon;
