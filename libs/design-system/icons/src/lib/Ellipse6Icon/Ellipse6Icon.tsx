import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const Ellipse6Icon = (props: IconPropsType) => {
  const { fill = colors['gray-400'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...rest}
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12ZM3.6 12a8.4 8.4 0 1 0 16.8 0 8.4 8.4 0 0 0-16.8 0Z"
      />
    </svg>
  );
};

export default Ellipse6Icon;
