import { colors } from '@nx-repo/shared-style-guide';
import * as React from 'react';

import { IconPropsType } from '../types';

const CalendarCheckTwoIcon = (props: IconPropsType) => {
  const { fill = colors['gray-500'], ...rest } = props;

  return (
    <svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      {...rest}
    >
      <path
        d="M15.75 7.5H2.25m13.5 1.875V6.6c0-1.26 0-1.89-.245-2.371a2.25 2.25 0 0 0-.984-.984C14.041 3 13.412 3 12.15 3h-6.3c-1.26 0-1.89 0-2.371.245a2.25 2.25 0 0 0-.984.984c-.245.48-.245 1.11-.245 2.371v6.3c0 1.26 0 1.89.245 2.371.216.424.56.768.984.984.48.245 1.11.245 2.371.245H9m3-15v3m-6-3v3m4.875 9.75 1.5 1.5 3.375-3.375"
        stroke={fill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { CalendarCheckTwoIcon };
