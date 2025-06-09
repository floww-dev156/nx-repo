import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const LineChartUpIcon3 = (props: IconPropsType) => {
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
        strokeWidth={1.5}
        d="m14.167 7.5-4.529 4.529c-.165.165-.247.247-.343.278a.417.417 0 0 1-.257 0c-.095-.03-.178-.113-.343-.278L7.138 10.47c-.165-.165-.247-.247-.343-.278a.417.417 0 0 0-.257 0c-.095.03-.178.113-.343.278L2.5 14.167M14.167 7.5h-3.334m3.334 0v3.333M6.5 17.5h7c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092c.273-.535.273-1.235.273-2.635v-7c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C15.6 2.5 14.9 2.5 13.5 2.5h-7c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C2.5 4.4 2.5 5.1 2.5 6.5v7c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C4.4 17.5 5.1 17.5 6.5 17.5Z"
      />
    </svg>
  );
};

export { LineChartUpIcon3 };
