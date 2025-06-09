import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const SwitchVertical01Icon = (props: IconPropsType): React.ReactElement => {
  const { width = 18, height = 18, fill = colors['gray-500'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...rest}
      viewBox="0 0 18 18"
    >
      <g id="switch-vertical-01">
        <path
          id="Icon (Stroke)"
          fill={fill}
          fillRule="evenodd"
          d="M4.72 2.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06L6 4.81V15a.75.75 0 0 1-1.5 0V4.81L2.78 6.53a.75.75 0 0 1-1.06-1.06zM12 13.19V3a.75.75 0 0 1 1.5 0v10.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06z"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  );
};

export default SwitchVertical01Icon;
