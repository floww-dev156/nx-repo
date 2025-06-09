import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const AlignCenterIcon = (props: IconPropsType): React.ReactElement => {
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
        d="M1.333 4c0-.368.298-.666.667-.666h12a.667.667 0 0 1 0 1.333H2a.667.667 0 0 1-.667-.666m2 2.667c0-.368.298-.666.667-.666h8a.667.667 0 0 1 0 1.333H4a.667.667 0 0 1-.667-.667m-2 2.667c0-.368.298-.667.667-.667h12a.667.667 0 1 1 0 1.334H2a.667.667 0 0 1-.667-.667m2 2.667c0-.368.298-.667.667-.667h8a.667.667 0 0 1 0 1.333H4a.667.667 0 0 1-.667-.666"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default AlignCenterIcon;
