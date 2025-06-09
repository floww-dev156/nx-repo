import React, { ReactElement } from 'react';

import { colors } from '@nx-repo/shared-style-guide';
import { IconPropsType } from '../types';

const CircularCopyLinkIcon = (props: IconPropsType): ReactElement => {
  const {
    width = 16,
    height = 16,
    fill = colors['blue-gray-700'],
    ...rest
  } = props;

  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M12.713 9.493a.479.479 0 0 1-.686 0 .479.479 0 0 1 0-.687 3.412 3.412 0 0 0 0-4.826c-1.333-1.327-3.5-1.334-4.827 0-1.326 1.333-1.333 3.5 0 4.826.194.194.194.5 0 .687a.479.479 0 0 1-.686 0 4.39 4.39 0 0 1 0-6.207c1.713-1.706 4.5-1.713 6.206 0a4.396 4.396 0 0 1-.007 6.207Z"
        fill={fill}
      />
      <path
        d="M3.286 6.506a.479.479 0 0 1 .687 0c.193.194.193.5 0 .687a3.412 3.412 0 0 0 0 4.827c1.333 1.326 3.5 1.333 4.826 0 1.327-1.334 1.334-3.5 0-4.827a.479.479 0 0 1 0-.687.479.479 0 0 1 .687 0 4.39 4.39 0 0 1 0 6.207c-1.714 1.707-4.5 1.713-6.207 0a4.396 4.396 0 0 1 .007-6.207Z"
        fill={fill}
      />
    </svg>
  );
};

export default CircularCopyLinkIcon;
