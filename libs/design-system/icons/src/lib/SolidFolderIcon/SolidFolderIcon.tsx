import React, { ReactElement } from 'react';

import { colors } from '@nx-repo/shared-style-guide';
import { IconPropsType } from '../types';

const SolidFolderIcon = (props: IconPropsType): ReactElement => {
  const {
    width = 24,
    height = 24,
    fill = colors['yellow-500'],
    ...rest
  } = props;

  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...rest}
    >
      <path
        d="m12.776 7.624.176.176H19.2A1.8 1.8 0 0 1 21 9.6v7.2a1.8 1.8 0 0 1-1.8 1.8H4.8A1.8 1.8 0 0 1 3 16.8V7.2a1.8 1.8 0 0 1 1.8-1.8h5.752l2.224 2.224Z"
        fill={fill}
        stroke={fill}
        strokeWidth={1.2}
      />
    </svg>
  );
};

export default SolidFolderIcon;
