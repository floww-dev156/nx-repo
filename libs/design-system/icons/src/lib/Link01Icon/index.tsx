import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const Link01Icon = (props: IconPropsType): React.ReactElement => {
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
        strokeWidth={1.667}
        d="M10.59 15.303 9.41 16.482a4.167 4.167 0 1 1-5.893-5.893l1.179-1.178m10.607 1.178 1.178-1.178a4.167 4.167 0 1 0-5.892-5.893L9.41 4.697m-2.327 8.22 5.833-5.834"
      />
    </svg>
  );
};

export { Link01Icon };
