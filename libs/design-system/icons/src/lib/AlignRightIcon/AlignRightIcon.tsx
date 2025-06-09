import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const AlignRightIcon = (props: IconPropsType): React.ReactElement => {
  const { height = 20, stroke = colors['gray-600'], width = 20 } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill={stroke}
        fillRule="evenodd"
        d="M2 4c0-.368.298-.666.667-.666H14a.667.667 0 1 1 0 1.333H2.667A.667.667 0 0 1 2 4.001m2.667 2.667c0-.368.298-.666.666-.666H14a.667.667 0 1 1 0 1.333H5.333a.667.667 0 0 1-.666-.667M2 9.334c0-.368.298-.667.667-.667H14a.667.667 0 1 1 0 1.334H2.667A.667.667 0 0 1 2 9.334m2.667 2.667c0-.368.298-.667.666-.667H14a.667.667 0 0 1 0 1.333H5.333a.667.667 0 0 1-.666-.666"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default AlignRightIcon;
