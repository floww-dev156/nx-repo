import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const BarChart10VerticalIcon = (props: IconPropsType) => {
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
      <path
        fill={fill}
        d="M20 6.133c0-.746 0-1.12-.145-1.405a1.334 1.334 0 0 0-.583-.583C18.987 4 18.613 4 17.867 4h-3.734c-.746 0-1.12 0-1.405.145-.25.128-.455.332-.583.583C12 5.013 12 5.387 12 6.133V28h8V6.133Z"
        opacity={0.12}
      />
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9.333H6.133c-.746 0-1.12 0-1.405.146-.25.127-.455.331-.583.582C4 10.347 4 10.72 4 11.467v14.4c0 .746 0 1.12.145 1.405.128.25.332.455.583.583.285.145.659.145 1.405.145H12m0 0h8m-8 0V6.133c0-.746 0-1.12.145-1.405.128-.25.332-.455.583-.583C13.013 4 13.387 4 14.133 4h3.734c.746 0 1.12 0 1.405.145.25.128.455.332.583.583.145.285.145.659.145 1.405V28m0-13.333h5.867c.746 0 1.12 0 1.405.145.25.128.455.332.583.583.145.285.145.658.145 1.405v9.067c0 .746 0 1.12-.145 1.405-.128.25-.332.455-.583.583-.285.145-.659.145-1.405.145H20"
      />
    </svg>
  );
};

export { BarChart10VerticalIcon };
