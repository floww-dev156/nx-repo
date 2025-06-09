import * as React from 'react';
import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

function RocketIcon2(iconProps: IconPropsType) {
  const {
    fill = colors['fuchsia-600'],
    width = 20,
    height = 20,
    ...props
  } = iconProps;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill={fill}
        d="M15.231 2.718A13.88 13.88 0 0122.006 1 1 1 0 0123 2c0 2.81-.788 7.707-5.852 11.416.085.358.182.829.249 1.349.073.567.114 1.22.054 1.863-.059.634-.222 1.332-.619 1.927v.001c-.68 1.015-1.96 1.603-2.855 1.928a12.628 12.628 0 01-1.751.49 1.03 1.03 0 01-.867-.206A1 1 0 0111 20v-4.586L8.587 13H4a1 1 0 01-.984-1.179 12.622 12.622 0 01.5-1.799c.325-.894.913-2.174 1.928-2.853l.001-.001c.595-.397 1.293-.56 1.927-.62a8.597 8.597 0 011.863.055c.526.068 1 .166 1.36.252a13.88 13.88 0 014.636-4.137z"
      ></path>
      <path
        fill={fill}
        fillRule="evenodd"
        d="M6.003 14.988a3.18 3.18 0 00-2.147.747c-.527.442-.913 1.052-1.2 1.639a11.29 11.29 0 00-.68 1.823 17.35 17.35 0 00-.467 2.168v.002a1 1 0 001.124 1.124 11.688 11.688 0 00.658-.11c.39-.075.928-.19 1.511-.357.58-.166 1.226-.388 1.824-.68.586-.287 1.196-.673 1.639-1.2 1.02-1.209 1.036-3.092-.152-4.266l-.013-.012a3.18 3.18 0 00-2.097-.878z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default RocketIcon2;
