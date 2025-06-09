import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';
import { IconPropsType } from '../types';

const CalendarCheck01Icon = (props: IconPropsType) => {
  const { width = 16, height = 16, fill = colors['gray-700'], ...rest } = props;
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
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 6.667H2m8.667-5.334V4M5.333 1.333V4M6 10.667 7.333 12l3-3M5.2 14.667h5.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108v-5.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874c-.428-.218-.988-.218-2.108-.218H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 4.186 2 4.746 2 5.867v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.428.218.988.218 2.108.218Z"
      />
    </svg>
  );
};
export { CalendarCheck01Icon };
