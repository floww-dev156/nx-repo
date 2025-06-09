import React from 'react';
import { IconPropsType } from '../types';

import { colors } from '@nx-repo/shared-style-guide';

function GoalsLinkIcon(props: IconPropsType) {
  const { fill = colors['blue-600'], width = 16, height = 16, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill={fill}
        d="M12.713 9.493a.479.479 0 01-.686 0 .479.479 0 010-.687 3.412 3.412 0 000-4.826c-1.334-1.327-3.5-1.334-4.827 0-1.327 1.333-1.333 3.5 0 4.826.193.194.193.5 0 .687a.479.479 0 01-.687 0 4.39 4.39 0 010-6.207c1.714-1.706 4.5-1.713 6.207 0a4.396 4.396 0 01-.007 6.207z"
      ></path>
      <path
        fill={fill}
        d="M3.287 6.506a.479.479 0 01.686 0c.194.194.194.5 0 .687a3.412 3.412 0 000 4.827c1.334 1.326 3.5 1.333 4.827 0 1.327-1.334 1.333-3.5 0-4.827a.479.479 0 010-.687.479.479 0 01.687 0 4.39 4.39 0 010 6.207c-1.714 1.707-4.5 1.713-6.207 0a4.396 4.396 0 01.007-6.207z"
      ></path>
    </svg>
  );
}

export { GoalsLinkIcon };
