import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const HourGlass01 = (props: IconPropsType) => {
  const { height = 24, width = 24, stroke = colors['primary-600'] } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 12.5 7.727 8.94c-.635-.53-.952-.794-1.18-1.119a3 3 0 0 1-.444-.947C6 6.491 6 6.078 6 5.252V2.5m6 10 4.273-3.56c.635-.53.952-.794 1.18-1.119a3 3 0 0 0 .444-.947C18 6.491 18 6.078 18 5.252V2.5m-6 10-4.273 3.56c-.635.53-.952.794-1.18 1.119a3 3 0 0 0-.444.947C6 18.509 6 18.922 6 19.748V22.5m6-10 4.273 3.56c.635.53.952.794 1.18 1.119a3 3 0 0 1 .444.947c.103.383.103.796.103 1.622V22.5M4 2.5h16m-16 20h16"
      />
    </svg>
  );
};

export default HourGlass01;
