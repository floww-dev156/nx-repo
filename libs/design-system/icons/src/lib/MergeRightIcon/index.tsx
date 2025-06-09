import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const MergeRightIcon = (props: IconPropsType): React.ReactElement => {
  const {
    fill = colors['primary-600'],
    height = 20,
    width = 20,
    strokeWidth = 2,
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      {...rest}
    >
      <path
        d="M3.33325 3.3335V3.3335C3.33325 7.01539 6.31802 10.0002 9.99992 10.0002H16.6666"
        stroke={fill}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.33325 16.6665V16.6665C3.33325 12.9846 6.31802 9.99984 9.99992 9.99984H16.6666"
        stroke={fill}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.5 5.8335L17.6667 10.0002L13.5 14.1668"
        stroke={fill}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default MergeRightIcon;
