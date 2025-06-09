import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const DirectionsIcon = (props: IconPropsType): React.ReactElement => {
  const { height = 22, width = 21, fill = colors['gray-600'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...rest}
    >
      <path
        fill={fill}
        d="m18.748 9.285-7.65-7.65a.846.846 0 0 0-1.199 0l-7.65 7.65a.852.852 0 0 0 0 1.203l7.65 7.646v.004a.852.852 0 0 0 1.203 0l7.65-7.65a.848.848 0 0 0-.004-1.203Zm-6.55 2.725V9.885h-3.4v2.55h-1.7v-3.4c0-.472.379-.85.85-.85h4.25V6.06l2.975 2.975-2.975 2.975Z"
      />
    </svg>
  );
};

export default DirectionsIcon;
