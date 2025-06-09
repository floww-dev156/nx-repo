import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const UploadLeadsIcon = (props: IconPropsType) => {
  const { stroke = colors['gray-500'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      {...rest}
      viewBox="0 0 20 20"
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13.334 15 2.5-2.5m0 0 2.5 2.5m-2.5-2.5v5M12.917 2.742a3.334 3.334 0 0 1 0 6.182M10 12.5H6.667c-1.553 0-2.33 0-2.942.254a3.333 3.333 0 0 0-1.804 1.804c-.254.612-.254 1.389-.254 2.942M11.25 5.833a3.333 3.333 0 1 1-6.666 0 3.333 3.333 0 0 1 6.666 0Z"
      />
    </svg>
  );
};

export default UploadLeadsIcon;
