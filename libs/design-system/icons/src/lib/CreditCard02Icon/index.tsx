import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const CreditCard02Icon = (props: IconPropsType): React.ReactElement => {
  const {
    height = 20,
    width = 20,
    stroke = colors['primary-600'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.333 8.333H1.667m7.5 3.333H5M1.667 6.833v6.333c0 .933 0 1.4.181 1.757.16.313.415.568.729.728.356.182.823.182 1.756.182h11.334c.933 0 1.4 0 1.756-.182.314-.16.569-.415.729-.728.181-.357.181-.824.181-1.757V6.833c0-.934 0-1.4-.181-1.757a1.667 1.667 0 0 0-.729-.728c-.356-.182-.823-.182-1.756-.182H4.332c-.933 0-1.4 0-1.756.182-.314.16-.569.414-.729.728-.181.357-.181.823-.181 1.757Z"
      />
    </svg>
  );
};

export default CreditCard02Icon;
