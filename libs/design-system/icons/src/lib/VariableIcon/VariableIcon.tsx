import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const VariableIcon = (props: IconPropsType): React.ReactElement => {
  const { height = 20, fill = colors['gray-600'], width = 20, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 18 19"
      {...rest}
      fill="none"
      stroke="none"
    >
      <path
        fill={fill}
        d="M15.602 2.853a.75.75 0 0 0-1.345.665 14.44 14.44 0 0 1 1.493 6.418 14.44 14.44 0 0 1-1.493 6.417.75.75 0 1 0 1.345.665 15.94 15.94 0 0 0 1.648-7.082 15.94 15.94 0 0 0-1.648-7.083M3.743 3.518a.75.75 0 0 0-1.345-.665A15.94 15.94 0 0 0 .75 9.936c0 2.542.593 4.948 1.648 7.082a.75.75 0 1 0 1.345-.665A14.44 14.44 0 0 1 2.25 9.936c0-2.307.538-4.486 1.493-6.418M10.499 7.507a2.42 2.42 0 0 1 1.845-.853h.068a.75.75 0 0 1 0 1.5h-.068a.93.93 0 0 0-.704.326L9.885 10.54l.556 1.954a.09.09 0 0 0 .086.067h1.045a.75.75 0 0 1 0 1.5h-1.045a1.59 1.59 0 0 1-1.529-1.156l-.282-.994-1.107 1.298c-.46.54-1.135.852-1.845.852h-.067a.75.75 0 1 1 0-1.5h.067c.27 0 .527-.118.704-.325l1.755-2.059-.556-1.955a.09.09 0 0 0-.085-.067H6.536a.75.75 0 0 1 0-1.5h1.046A1.59 1.59 0 0 1 9.11 7.811l.283.994z"
      ></path>
    </svg>
  );
};

export default VariableIcon;
