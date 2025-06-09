import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const ArrowRight02Icon = (props: IconPropsType): React.ReactElement => {
  const { height = 20, width = 20, fill = colors['gray-500'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...rest}
    >
      <path
        d="M6.375 6.74512C6.375 5.54621 6.375 4.94676 6.62076 4.63887C6.8345 4.37111 7.15861 4.21533 7.50121 4.2157C7.89516 4.21613 8.36326 4.59061 9.29945 5.33956L15.868 10.5944C16.4686 11.0749 16.7689 11.3151 16.8776 11.6054C16.973 11.8598 16.973 12.1402 16.8776 12.3946C16.7689 12.6849 16.4686 12.9251 15.868 13.4056L9.29945 18.6604C8.36326 19.4094 7.89516 19.7839 7.50121 19.7843C7.15861 19.7847 6.8345 19.6289 6.62076 19.3611C6.375 19.0532 6.375 18.4538 6.375 17.2549V6.74512Z"
        fill={fill}
      />
    </svg>
  );
};

export default ArrowRight02Icon;
