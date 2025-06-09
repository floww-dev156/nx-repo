import { colors } from '@nx-repo/shared-style-guide';
import React from 'react';

import { IconPropsType } from '../types';

const HeadingIcon = (props: IconPropsType): React.ReactElement => {
  const { height = 24, width = 24, fill = colors['gray-400'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={height}
      height={width}
      fill="none"
      viewBox="0 0 24 24"
      {...rest}
    >
      <path
        fill={fill}
        d="M16.337 16.5h-2.198v-4.57H9.855v4.57H7.657V5.836h2.198v4.321h4.284V5.836h2.198V16.5Z"
      />
    </svg>
  );
};

export { HeadingIcon };
