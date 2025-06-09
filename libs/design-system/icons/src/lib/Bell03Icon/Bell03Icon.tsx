import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

export const Bell03Icon = (props: IconPropsType) => {
  const {
    width = 18,
    height = 18,
    stroke = colors['gray-600'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...rest}
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 12.667a2 2 0 1 1-4 0m3.197-8.508a1.667 1.667 0 1 0-2.395 0M12 7.467c0-.92-.422-1.802-1.172-2.452C10.078 4.365 9.061 4 8 4s-2.078.365-2.829 1.015C4.421 5.665 4 6.547 4 7.467c0 1.52-.377 2.633-.848 3.43-.537.907-.805 1.36-.794 1.469.012.124.034.163.135.236.088.065.53.065 1.412.065h8.19c.882 0 1.324 0 1.412-.065.1-.073.123-.112.135-.236.01-.109-.258-.562-.794-1.47-.47-.796-.848-1.908-.848-3.43Z"
      />
    </svg>
  );
};
