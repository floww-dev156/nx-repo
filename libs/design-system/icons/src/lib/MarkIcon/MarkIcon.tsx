import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const MarkIcon = (props: IconPropsType): React.ReactElement => {
  const {
    height = 20,
    width = 20,
    stroke = colors['gray-600'],
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
      <g clip-path="url(#clip0_445_48972)">
        <path
          d="M16.6665 9.99935C16.6665 13.6812 13.6817 16.666 9.99984 16.666M16.6665 9.99935C16.6665 6.31745 13.6817 3.33268 9.99984 3.33268M16.6665 9.99935H18.3332M9.99984 16.666C6.31794 16.666 3.33317 13.6812 3.33317 9.99935M9.99984 16.666V18.3327M3.33317 9.99935C3.33317 6.31745 6.31794 3.33268 9.99984 3.33268M3.33317 9.99935H1.6665M9.99984 3.33268V1.66602M12.4998 9.99935C12.4998 11.3801 11.3805 12.4993 9.99984 12.4993C8.61913 12.4993 7.49984 11.3801 7.49984 9.99935C7.49984 8.61864 8.61913 7.49935 9.99984 7.49935C11.3805 7.49935 12.4998 8.61864 12.4998 9.99935Z"
          stroke={stroke}
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_445_48972">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MarkIcon;
