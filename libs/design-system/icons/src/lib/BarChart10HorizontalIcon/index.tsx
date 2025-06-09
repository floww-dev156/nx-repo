import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const BarChart10HorizontalIcon = (props: IconPropsType) => {
  const {
    fill = colors['primary-500'],
    stroke = colors['primary-500'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill="none"
      viewBox="0 0 32 32"
      {...rest}
    >
      <g
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path
          fill={stroke}
          d="M6.133 12c-.746 0-1.12 0-1.405.145-.25.128-.455.332-.583.583C4 13.013 4 13.387 4 14.133v3.734c0 .746 0 1.12.145 1.405.128.25.332.455.583.583.285.145.659.145 1.405.145H28v-8H6.133Z"
          opacity={0.12}
        />
        <path d="M9.333 20v5.867c0 .746 0 1.12.146 1.405.127.25.331.455.582.583.286.145.659.145 1.406.145h14.4c.746 0 1.12 0 1.405-.145.25-.128.455-.332.583-.583.145-.285.145-.659.145-1.405V20m0 0v-8m0 8H6.133c-.746 0-1.12 0-1.405-.145a1.334 1.334 0 0 1-.583-.583C4 18.987 4 18.613 4 17.867v-3.734c0-.746 0-1.12.145-1.405.128-.25.332-.455.583-.583C5.013 12 5.387 12 6.133 12H28m-13.333 0V6.133c0-.746 0-1.12.145-1.405.128-.25.332-.455.583-.583C15.68 4 16.053 4 16.8 4h9.067c.746 0 1.12 0 1.405.145.25.128.455.332.583.583.145.285.145.659.145 1.405V12" />
      </g>
    </svg>
  );
};

export { BarChart10HorizontalIcon };
