import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const User01Icon = (props: IconPropsType) => {
  const {
    height = 20,
    width = 20,
    fill = colors['primary-600'],
    ...rest
  } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.667 17.5c0-1.163 0-1.745-.144-2.218a3.333 3.333 0 0 0-2.222-2.222c-.473-.143-1.055-.143-2.217-.143H7.917c-1.163 0-1.745 0-2.218.143a3.333 3.333 0 0 0-2.222 2.222c-.143.473-.143 1.055-.143 2.218M13.75 6.25a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      />
    </svg>
  );
};

export default User01Icon;
