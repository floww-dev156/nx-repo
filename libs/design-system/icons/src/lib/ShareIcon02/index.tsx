import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const ShareIcon02 = (props: IconPropsType) => {
  const { width = 20, height = 20, stroke = colors['base-white'] } = props;

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
        strokeWidth={1.667}
        d="M6.333 9.167c-.775 0-1.162 0-1.48.085a2.5 2.5 0 0 0-1.768 1.768C3 11.338 3 11.725 3 12.5v1c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C4.9 17.5 5.6 17.5 7 17.5h7c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C18 15.6 18 14.9 18 13.5v-1c0-.775 0-1.162-.085-1.48a2.5 2.5 0 0 0-1.768-1.768c-.318-.085-.705-.085-1.48-.085m-.834-3.334L10.5 2.5m0 0L7.167 5.833M10.5 2.5v10"
      />
    </svg>
  );
};

export default ShareIcon02;
