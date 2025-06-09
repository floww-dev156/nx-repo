import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const RingSolidIcon = (props: IconPropsType): React.ReactElement => {
  const {
    fill = colors['orange-dark-500'],
    width = 24,
    height = 24,
    stroke = colors['orange-dark-500'],
    ...rest
  } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...rest}
    >
      <circle cx="12" cy="12" r="10" stroke={stroke} stroke-width="4" />
      <path
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM4.00557 12C4.00557 16.4152 7.5848 19.9944 12 19.9944C16.4152 19.9944 19.9944 16.4152 19.9944 12C19.9944 7.5848 16.4152 4.00557 12 4.00557C7.5848 4.00557 4.00557 7.5848 4.00557 12Z"
        fill={fill}
      />
    </svg>
  );
};

export { RingSolidIcon };
