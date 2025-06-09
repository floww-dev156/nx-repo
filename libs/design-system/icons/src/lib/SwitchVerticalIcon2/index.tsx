import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

const SwitchVerticalIcon2 = (props) => {
  const {
    width = 20,
    height = 20,
    stroke = colors['gray-600'],
    strokeWidth = 1.667,
    ...rest
  } = props;
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M5.833 3.333v13.334m0 0L2.5 13.333m3.333 3.334 3.334-3.334m5 3.334V3.333m0 0-3.334 3.334m3.334-3.333L17.5 6.667"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { SwitchVerticalIcon2 };
