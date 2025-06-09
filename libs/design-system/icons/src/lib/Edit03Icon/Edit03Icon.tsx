import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const Edit03Icon = (props: IconPropsType) => {
  const { height, width, stroke = colors['gray-500'], ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={height}
      height={width}
      fill={'none'}
      viewBox="0 0 18 18"
      {...rest}
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 15h6.75m-13.5 0h1.256c.367 0 .55 0 .723-.041.153-.037.3-.098.433-.18.152-.093.282-.223.541-.482l9.422-9.422a1.591 1.591 0 0 0-2.25-2.25l-9.422 9.422c-.26.26-.39.39-.482.54a1.5 1.5 0 0 0-.18.434c-.041.173-.041.356-.041.723V15Z"
      />
    </svg>
  );
};
export { Edit03Icon };
