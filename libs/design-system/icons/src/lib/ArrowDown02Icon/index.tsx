import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const ArrowDown02Icon = (props: IconPropsType): React.ReactElement => {
  const { height = 20, width = 20, fill = colors['gray-400'], ...rest } = props;

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
        d="M4.49553 8.11942C3.69665 7.12081 3.2972 6.62151 3.29675 6.2013C3.29636 5.83585 3.46251 5.49013 3.74813 5.26215C4.07654 5 4.71596 5 5.9948 5H14.0052C15.284 5 15.9235 5 16.2519 5.26215C16.5375 5.49013 16.7036 5.83585 16.7032 6.2013C16.7028 6.62151 16.3034 7.12081 15.5045 8.11941L11.4993 13.1259C10.9868 13.7665 10.7305 14.0868 10.421 14.2028C10.1495 14.3045 9.85047 14.3045 9.57904 14.2028C9.26947 14.0868 9.01322 13.7665 8.50073 13.1259L4.49553 8.11942Z"
        fill={fill}
      />
    </svg>
  );
};

export { ArrowDown02Icon };
