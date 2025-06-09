import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const Shuffle01Icon = (props: IconPropsType) => {
  const {
    height = 20,
    width = 20,
    stroke = colors['gray-700'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      {...rest}
    >
      <path
        d="M15 12.5L17.5 15M17.5 15L15 17.5M17.5 15H15.4741C14.6914 15 14.3001 15 13.9448 14.8921C13.6304 14.7966 13.3378 14.64 13.0839 14.4314C12.7971 14.1956 12.58 13.87 12.1459 13.2188L11.9444 12.9167M15 2.5L17.5 5M17.5 5L15 7.5M17.5 5H15.4741C14.6914 5 14.3001 5 13.9448 5.10788C13.6304 5.20338 13.3378 5.35995 13.0839 5.56864C12.7971 5.80436 12.58 6.12998 12.1459 6.7812L7.85413 13.2188C7.41998 13.87 7.20291 14.1956 6.9161 14.4314C6.6622 14.64 6.36964 14.7966 6.05517 14.8921C5.69995 15 5.30861 15 4.52593 15H2.5M2.5 5H4.52593C5.30861 5 5.69995 5 6.05517 5.10788C6.36964 5.20338 6.6622 5.35995 6.9161 5.56864C7.20291 5.80436 7.41998 6.12997 7.85413 6.7812L8.05556 7.08333"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export { Shuffle01Icon };
