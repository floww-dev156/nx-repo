import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const RefreshCCW05Icon = (props: IconPropsType): React.ReactElement => {
  const { height = 18, width = 18, fill = colors['gray-500'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...props}
    >
      <path
        fill={fill}
        d="M16.325 5.025a.75.75 0 1 1-.388 1.449l-.304-.081a7.127 7.127 0 0 1-9.526 9.118.75.75 0 0 1 .608-1.37 5.627 5.627 0 0 0 7.612-6.954l-.07.257a.75.75 0 0 1-1.448-.389l.549-2.049a.75.75 0 0 1 .918-.53l2.05.55ZM11.896 2.489a.75.75 0 0 1-.609 1.371 5.627 5.627 0 0 0-7.612 6.954l.07-.258a.75.75 0 1 1 1.449.389l-.55 2.049a.75.75 0 0 1-.918.53l-2.049-.549a.75.75 0 0 1 .388-1.449l.305.082a7.127 7.127 0 0 1 9.526-9.12Z"
      />
    </svg>
  );
};

export { RefreshCCW05Icon };
