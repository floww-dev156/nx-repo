import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

const SelectedRadioIcon = (props) => {
  const {
    width = 16,
    height = 16,
    fill = colors['primary-600'],
    strokeWidth = 1.667,
    stroke = colors['base-white'],
  } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...props}
      fill="none"
    >
      <rect width={15} height={15} x={0.5} y={0.5} fill={fill} rx={7.5} />
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M11.335 5.5 6.75 10.083 4.668 8"
      />
      <rect width={15} height={15} x={0.5} y={0.5} stroke={fill} rx={7.5} />
    </svg>
  );
};

export { SelectedRadioIcon };
