import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

function BoldSelectedCopySuccessIcon(props: IconPropsType) {
  const { fill = colors['blue-500'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
      {...rest}
    >
      <path
        fill={fill}
        d="M12.825 1.5h-3.15c-2.212 0-3.3.751-3.588 2.554-.088.55.376 1.008.933 1.008h1.305c3.15 0 4.613 1.463 4.613 4.613v1.306c0 .556.459 1.02 1.009.933 1.802-.288 2.553-1.377 2.553-3.589v-3.15c0-2.625-1.05-3.675-3.675-3.675z"
      ></path>
      <path
        fill={fill}
        d="M8.325 6h-3.15C2.55 6 1.5 7.05 1.5 9.675v3.15c0 2.625 1.05 3.675 3.675 3.675h3.15C10.95 16.5 12 15.45 12 12.825v-3.15C12 7.05 10.95 6 8.325 6zm.893 4.238L6.434 13.02a.533.533 0 01-.382.158.533.533 0 01-.383-.158l-1.395-1.395a.534.534 0 010-.758c.21-.21.547-.21.757 0l1.013 1.013 2.408-2.408c.21-.21.547-.21.757 0 .21.21.217.556.007.766z"
      ></path>
    </svg>
  );
}

export { BoldSelectedCopySuccessIcon };
