import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const CloudOffIcon = ({
  fill = colors['blue-gray-400'],
  width = 18,
  height = 18,
  ...rest
}: IconPropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 18 18"
    {...rest}
  >
    <path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M16.275 12.089a3.375 3.375 0 00-2.835-4.574 4.501 4.501 0 00-5.415-3.659m-2.56 1.608a4.48 4.48 0 00-.905 2.05 3.375 3.375 0 00.315 6.736h8.25c.342 0 .672-.05.983-.146M2.25 2.25l13.5 13.5"
    ></path>
  </svg>
);

export default CloudOffIcon;
