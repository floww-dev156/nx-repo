import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const Calender01Icon = (props: IconPropsType): React.ReactElement => {
  const {
    stroke = colors['gray-600'],
    width = 16,
    height = 16,
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...rest}
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 6.665H2m8.667-5.333v2.667M5.333 1.332v2.667M5.2 14.665h5.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108v-5.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874c-.428-.218-.988-.218-2.108-.218H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 4.185 2 4.745 2 5.865v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.428.218.988.218 2.108.218Z"
      />
    </svg>
  );
};
export { Calender01Icon };
