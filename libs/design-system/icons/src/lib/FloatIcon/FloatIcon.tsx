import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const FloatIcon = (props: IconPropsType) => {
  const { height = 18, width = 18, stroke = colors['gray-500'] } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...props}
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 9h.004M5.85 15.75h6.3c1.26 0 1.89 0 2.371-.245.424-.216.768-.56.984-.984.245-.48.245-1.11.245-2.371v-6.3c0-1.26 0-1.89-.245-2.371a2.25 2.25 0 0 0-.984-.984c-.48-.245-1.11-.245-2.371-.245h-6.3c-1.26 0-1.89 0-2.371.245a2.25 2.25 0 0 0-.984.984c-.245.48-.245 1.11-.245 2.371v6.3c0 1.26 0 1.89.245 2.371.216.424.56.768.984.984.48.245 1.11.245 2.371.245ZM9.188 9a.188.188 0 1 1-.376 0 .188.188 0 0 1 .376 0Z"
      />
    </svg>
  );
};
export default FloatIcon;
