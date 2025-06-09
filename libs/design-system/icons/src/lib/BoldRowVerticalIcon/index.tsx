import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';
import { IconPropsType } from '../types';

function BoldRowVerticalIcon(props: IconPropsType): JSX.Element {
  const { width = 16, height = 16, fill = colors['blue-600'], ...rest } = props;

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
        d="M13.267 9H2.734c-1 0-1.4.427-1.4 1.487v2.693c0 1.06.4 1.487 1.4 1.487h10.533c1 0 1.4-.427 1.4-1.487v-2.693c0-1.06-.4-1.487-1.4-1.487ZM13.267 1.333H2.734c-1 0-1.4.427-1.4 1.487v2.693c0 1.06.4 1.487 1.4 1.487h10.533c1 0 1.4-.427 1.4-1.487V2.82c0-1.06-.4-1.487-1.4-1.487Z"
        fill={fill}
      />
    </svg>
  );
}

export { BoldRowVerticalIcon };
