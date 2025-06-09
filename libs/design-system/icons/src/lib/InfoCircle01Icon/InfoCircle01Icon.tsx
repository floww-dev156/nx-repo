import { colors } from '@nx-repo/shared-style-guide';

import * as React from 'react';

import { IconPropsType } from '../types';

const InfoCircle01Icon = (props: IconPropsType) => {
  const { height = 18, width = 18, fill = colors['gray-600'], ...rest } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clip-path="url(#clip0_23066_73758)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25ZM0.75 9C0.75 4.44365 4.44365 0.75 9 0.75C13.5563 0.75 17.25 4.44365 17.25 9C17.25 13.5563 13.5563 17.25 9 17.25C4.44365 17.25 0.75 13.5563 0.75 9ZM8.25 6C8.25 5.58579 8.58579 5.25 9 5.25H9.0075C9.42171 5.25 9.7575 5.58579 9.7575 6C9.7575 6.41421 9.42171 6.75 9.0075 6.75H9C8.58579 6.75 8.25 6.41421 8.25 6ZM9 8.25C9.41421 8.25 9.75 8.58579 9.75 9V12C9.75 12.4142 9.41421 12.75 9 12.75C8.58579 12.75 8.25 12.4142 8.25 12V9C8.25 8.58579 8.58579 8.25 9 8.25Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_23066_73758">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default InfoCircle01Icon;
