import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const ArrowVectorIcon = (props: IconPropsType): React.ReactElement => {
  const { height = 8, width = 14, fill = colors['gray-400'] } = props;

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
        d="M1 3.5a.5.5 0 0 0 0 1v-1Zm12.354.854a.5.5 0 0 0 0-.708L10.172.464a.5.5 0 0 0-.708.708L12.293 4 9.464 6.828a.5.5 0 1 0 .708.708l3.182-3.182ZM1 4.5h12v-1H1v1Z"
      />
    </svg>
  );
};

export { ArrowVectorIcon };
