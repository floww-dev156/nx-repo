import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const Lock03Icon = (props: IconPropsType): React.ReactElement => {
  const { fill = colors['gray-500'], height = 18, width = 18, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...props}
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.667}
        d="M12.75 8.25V6a3.75 3.75 0 1 0-7.5 0v2.25m1.35 7.5h4.8c1.26 0 1.89 0 2.371-.245.424-.216.768-.56.984-.984.245-.48.245-1.11.245-2.371v-.3c0-1.26 0-1.89-.245-2.371a2.25 2.25 0 0 0-.984-.984c-.48-.245-1.11-.245-2.371-.245H6.6c-1.26 0-1.89 0-2.371.245a2.25 2.25 0 0 0-.984.984C3 9.959 3 10.589 3 11.85v.3c0 1.26 0 1.89.245 2.371.216.424.56.768.984.984.48.245 1.11.245 2.371.245Z"
      />
    </svg>
  );
};

export default Lock03Icon;
