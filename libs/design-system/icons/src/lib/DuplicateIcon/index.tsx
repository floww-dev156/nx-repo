import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

function DuplicateIcon(props: IconPropsType) {
  const { fill = colors['blue-gray-700'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill={fill}
        d="M7.4 15.166H4.6c-2.607 0-3.767-1.16-3.767-3.766V8.6c0-2.607 1.16-3.767 3.767-3.767h2.8c2.607 0 3.767 1.16 3.767 3.767v2.8c0 2.606-1.16 3.766-3.767 3.766zM4.6 5.833c-2.067 0-2.767.7-2.767 2.767v2.8c0 2.066.7 2.766 2.767 2.766h2.8c2.067 0 2.767-.7 2.767-2.766V8.6c0-2.067-.7-2.767-2.767-2.767H4.6z"
      ></path>
      <path
        fill={fill}
        d="M11.4 11.166h-.733a.504.504 0 01-.5-.5V8.6c0-2.067-.7-2.767-2.767-2.767H5.333a.504.504 0 01-.5-.5V4.6C4.833 1.993 5.993.833 8.6.833h2.8c2.607 0 3.767 1.16 3.767 3.767v2.8c0 2.606-1.16 3.766-3.767 3.766zm-.233-1h.233c2.067 0 2.767-.7 2.767-2.766V4.6c0-2.067-.7-2.767-2.767-2.767H8.6c-2.067 0-2.767.7-2.767 2.767v.233H7.4c2.607 0 3.767 1.16 3.767 3.767v1.566z"
      ></path>
    </svg>
  );
}

export { DuplicateIcon };
