import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const AlarmClockPlusIcon = (props: IconPropsType): React.ReactElement => {
  const {
    height = 20,
    width = 20,
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
        strokeWidth="1.5"
        d="M4.166 2.5L1.666 5m16.667 0l-2.5-2.5M4.999 15.833L3.333 17.5m11.666-1.667l1.667 1.667m-6.667-4.167v-5m-2.5 2.5h5M10 17.5a6.667 6.667 0 100-13.333A6.667 6.667 0 0010 17.5z"
      ></path>
    </svg>
  );
};

export { AlarmClockPlusIcon };
