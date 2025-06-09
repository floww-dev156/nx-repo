import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';
import { IconPropsType } from '../types';

const AlertCircle01Icon = (props: IconPropsType): React.ReactElement => {
  const { width = 20, height = 20, fill = colors['warning-500'] } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_4671_81178)">
        <path
          opacity="0.12"
          d="M9.99984 18.3337C14.6022 18.3337 18.3332 14.6027 18.3332 10.0003C18.3332 5.39795 14.6022 1.66699 9.99984 1.66699C5.39746 1.66699 1.6665 5.39795 1.6665 10.0003C1.6665 14.6027 5.39746 18.3337 9.99984 18.3337Z"
          fill={fill}
          stroke={fill}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.99984 6.66699V10.0003M9.99984 13.3337H10.0082M18.3332 10.0003C18.3332 14.6027 14.6022 18.3337 9.99984 18.3337C5.39746 18.3337 1.6665 14.6027 1.6665 10.0003C1.6665 5.39795 5.39746 1.66699 9.99984 1.66699C14.6022 1.66699 18.3332 5.39795 18.3332 10.0003Z"
          stroke={fill}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4671_81178">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AlertCircle01Icon;
