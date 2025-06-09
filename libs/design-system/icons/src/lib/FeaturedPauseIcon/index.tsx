import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const FeaturedPauseIcon = (props: IconPropsType) => {
  const {
    height = 20,
    width = 20,
    fill = colors['primary-600'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={height}
      height={width}
      fill="none"
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        fill={fill}
        d="M9 15.53V4.47C9 3.42 8.553 3 7.424 3H4.576C3.447 3 3 3.42 3 4.47v11.06C3 16.58 3.447 17 4.576 17h2.848C8.553 17 9 16.58 9 15.53ZM17 15.53V4.47C17 3.42 16.553 3 15.424 3h-2.848C11.455 3 11 3.42 11 4.47v11.06c0 1.05.447 1.47 1.576 1.47h2.848C16.553 17 17 16.58 17 15.53Z"
      />
    </svg>
  );
};
export { FeaturedPauseIcon };
