import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const BarChartSquare02Icon = (props: IconPropsType): React.ReactElement => {
  const {
    width = 20,
    height = 20,
    fill = colors['primary-600'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.667 12.5v1.666m3.333-5v5m3.333-8.333v8.333M6.5 17.5h7c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092c.273-.535.273-1.235.273-2.635v-7c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C15.6 2.5 14.9 2.5 13.5 2.5h-7c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C2.5 4.4 2.5 5.1 2.5 6.5v7c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C4.4 17.5 5.1 17.5 6.5 17.5Z"
      />
    </svg>
  );
};

export default BarChartSquare02Icon;
