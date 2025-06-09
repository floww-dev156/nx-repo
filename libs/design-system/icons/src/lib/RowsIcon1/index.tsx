import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

const RowsIcon1 = (props) => {
  const {
    width = 18,
    height = 18,
    stroke = colors['gray-500'],
    strokeWidth = 1.667,
  } = props;
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.35 7.5c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .655-.656c.164-.32.164-.74.164-1.581v-.45c0-.84 0-1.26-.164-1.581a1.5 1.5 0 0 0-.655-.656c-.32-.163-.74-.163-1.581-.163h-8.7c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656c-.163.32-.163.74-.163 1.581v.45c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.656c.32.163.74.163 1.581.163h8.7ZM13.35 15.75c.84 0 1.26 0 1.581-.164a1.5 1.5 0 0 0 .655-.655c.164-.32.164-.74.164-1.581v-.45c0-.84 0-1.26-.164-1.581a1.5 1.5 0 0 0-.655-.655c-.32-.164-.74-.164-1.581-.164h-8.7c-.84 0-1.26 0-1.581.164a1.5 1.5 0 0 0-.656.655c-.163.32-.163.74-.163 1.581v.45c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.655c.32.164.74.164 1.581.164h8.7Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { RowsIcon1 };
