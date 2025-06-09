import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const FileIcon4 = (props: IconPropsType) => {
  const {
    width = 40,
    height = 40,
    fill = colors['blue-50'],
    stroke = colors['primary-600'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...rest}
      viewBox="0 0 40 40 "
    >
      <rect width={40} height={40} fill={fill} rx={20} />
      <path
        fill={stroke}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M25.936 15.934 22.4 12.4a2.5 2.5 0 0 0-.732-.508v3.442c0 .467 0 .7.09.879.08.156.208.284.365.364.178.09.412.09.878.09h3.442a2.498 2.498 0 0 0-.507-.732Z"
        opacity={0.12}
      />
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.665 11.891v3.442c0 .467 0 .7.091.879.08.156.208.284.364.364.179.09.412.09.879.09h3.442m.224 1.657v6.01c0 1.4 0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.093c-.534.272-1.235.272-2.635.272h-5.333c-1.4 0-2.1 0-2.635-.272a2.5 2.5 0 0 1-1.092-1.093c-.273-.535-.273-1.235-.273-2.635v-8.666c0-1.4 0-2.1.272-2.636a2.5 2.5 0 0 1 1.093-1.092c.535-.273 1.235-.273 2.635-.273h2.677c.611 0 .917 0 1.204.07.255.06.5.162.723.299.252.155.469.37.9.803l2.658 2.657c.432.432.648.649.803.9.137.224.238.468.3.723.068.288.068.594.068 1.205Z"
      />
    </svg>
  );
};

export { FileIcon4 };
