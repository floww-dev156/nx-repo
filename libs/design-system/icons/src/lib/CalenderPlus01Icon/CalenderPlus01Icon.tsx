import * as React from 'react';
import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const CalenderPlus01Icon = (props: IconPropsType) => {
  const {
    height = 28,
    stroke = colors['primary-600'],
    width = 28,
    ...rest
  } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      fill="none"
      {...rest}
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M24.5 9.333h-21m15.167-7v3.5m-9.334-3.5v3.5M14 21v-7m-3.5 3.5h7m-8.4 8.167h9.8c1.96 0 2.94 0 3.689-.382a3.5 3.5 0 0 0 1.53-1.53c.381-.748.381-1.728.381-3.688v-9.8c0-1.96 0-2.94-.381-3.69a3.5 3.5 0 0 0-1.53-1.529c-.749-.381-1.729-.381-3.689-.381H9.1c-1.96 0-2.94 0-3.689.381a3.5 3.5 0 0 0-1.53 1.53C3.5 7.326 3.5 8.306 3.5 10.267v9.8c0 1.96 0 2.94.381 3.689a3.5 3.5 0 0 0 1.53 1.53c.749.38 1.729.38 3.689.38Z"
      />
    </svg>
  );
};
export { CalenderPlus01Icon };
