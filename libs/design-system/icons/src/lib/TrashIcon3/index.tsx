import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const TrashIcon3 = (props: IconPropsType): React.ReactElement => {
  const {
    height = 16,
    width = 16,
    fill = colors['error-500'],
    ...rest
  } = props;

  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        d="M6 2h4M2 4h12m-1.333 0-.468 7.013c-.07 1.052-.105 1.578-.332 1.977a2 2 0 0 1-.866.81c-.413.2-.94.2-1.995.2H6.994c-1.055 0-1.582 0-1.995-.2a2 2 0 0 1-.866-.81c-.227-.399-.262-.925-.332-1.977L3.333 4m3.334 3v3.333M9.333 7v3.333"
        stroke={fill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { TrashIcon3 };
