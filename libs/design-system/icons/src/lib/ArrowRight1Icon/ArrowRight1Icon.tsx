import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const ArrowRight1Icon = (props: IconPropsType): React.ReactElement => {
  const {
    height = 20,
    width = 20,
    fill = colors['base-white'],
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
        fill={fill}
        fillRule="evenodd"
        d="M9.91 3.577a.833.833 0 0 1 1.179 0l5.833 5.834a.833.833 0 0 1 0 1.178l-5.833 5.833a.833.833 0 0 1-1.179-1.178l4.411-4.41H4.666a.833.833 0 0 1 0-1.667h9.655l-4.41-4.411a.833.833 0 0 1 0-1.179Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ArrowRight1Icon;
