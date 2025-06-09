import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

export const LeftIndent02Icon = (props: IconPropsType) => {
  const { height = 18, width = 18, fill = colors['gray-400'], ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill={fill}
      {...rest}
    >
      <path
        d="M15.75 6.93746H9M15.75 2.99997L9 2.99996M15.75 11.0625H2.25M15.75 15H2.25M3.21 2.21996L6.11 4.39496C6.32712 4.5578 6.43568 4.63922 6.4745 4.73904C6.5085 4.82647 6.5085 4.92346 6.4745 5.01089C6.43568 5.11071 6.32712 5.19213 6.11 5.35496L3.21 7.52996C2.90102 7.7617 2.74652 7.87757 2.61721 7.87488C2.50467 7.87254 2.39914 7.81978 2.32974 7.73115C2.25 7.62931 2.25 7.4362 2.25 7.04996V2.69996C2.25 2.31373 2.25 2.12062 2.32974 2.01878C2.39914 1.93015 2.50467 1.87739 2.61721 1.87505C2.74652 1.87236 2.90102 1.98823 3.21 2.21996Z"
        stroke="#667085"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
