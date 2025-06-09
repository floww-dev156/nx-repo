import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const CalendarPlus02Icon = (props: IconPropsType): React.ReactElement => {
  const { height = 20, width = 20, fill = colors['gray-600'], ...rest } = props;

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
        strokeWidth="1.5"
        d="M17.5 9.584v-2.25c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 00-1.092-1.093c-.535-.272-1.235-.272-2.635-.272h-7c-1.4 0-2.1 0-2.635.272A2.5 2.5 0 002.772 4.7C2.5 5.233 2.5 5.934 2.5 7.334v7c0 1.4 0 2.1.272 2.635a2.5 2.5 0 001.093 1.092c.535.273 1.235.273 2.635.273h3.917m7.083-10h-15m10.833-6.667V5M6.667 1.667V5M15 17.5v-5M12.5 15h5"
      ></path>
    </svg>
  );
};

export { CalendarPlus02Icon };
