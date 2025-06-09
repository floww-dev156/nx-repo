import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const HeadPhonesIcon = (props: IconPropsType) => {
  const {
    height = 40,
    width = 40,
    fill = colors['orange-600'],
    stroke = colors['orange-600'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={height}
      height={width}
      fill="none"
      viewBox="0 0 40 40"
      {...rest}
    >
      <rect width={width} height={height} fill="#FEF6EE" rx={20} />
      <g opacity={0.12}>
        <path
          fill={fill}
          d="M12.5 23.75a2.083 2.083 0 1 1 4.167 0v1.666a2.083 2.083 0 0 1-4.167 0V23.75ZM23.333 23.75a2.083 2.083 0 0 1 4.167 0v1.666a2.083 2.083 0 1 1-4.167 0V23.75Z"
        />
        <path
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12.5 23.75a2.083 2.083 0 1 1 4.167 0v1.666a2.083 2.083 0 0 1-4.167 0V23.75ZM23.333 23.75a2.083 2.083 0 0 1 4.167 0v1.666a2.083 2.083 0 1 1-4.167 0V23.75Z"
        />
      </g>
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M27.5 25v-5a7.5 7.5 0 0 0-15 0v5m2.083 2.5a2.083 2.083 0 0 1-2.083-2.083V23.75a2.083 2.083 0 1 1 4.167 0v1.667c0 1.15-.933 2.083-2.084 2.083Zm10.834 0a2.083 2.083 0 0 1-2.084-2.083V23.75a2.083 2.083 0 0 1 4.167 0v1.667c0 1.15-.933 2.083-2.083 2.083Z"
      />
    </svg>
  );
};
export { HeadPhonesIcon };
