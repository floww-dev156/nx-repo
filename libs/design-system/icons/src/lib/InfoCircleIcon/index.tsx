import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

interface InfoCircleIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const InfoCircleIcon = (props: InfoCircleIconProps): React.ReactElement => {
  const { width = 20, height = 20, fill = colors['red-400'], ...rest } = props;
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
      viewBox="0 0 20 20"
    >
      <path
        d="M10 18.958c-4.942 0-8.958-4.016-8.958-8.958S5.058 1.042 10 1.042 18.958 5.058 18.958 10 14.942 18.958 10 18.958Zm0-16.666C5.75 2.292 2.292 5.75 2.292 10S5.75 17.708 10 17.708 17.708 14.25 17.708 10 14.25 2.292 10 2.292Z"
        fill={fill}
      />
      <path
        d="M10 11.458a.63.63 0 0 1-.625-.625V6.667A.63.63 0 0 1 10 6.042a.63.63 0 0 1 .625.625v4.166a.63.63 0 0 1-.625.625ZM10 14.167a.829.829 0 0 1-.317-.067.963.963 0 0 1-.275-.175.86.86 0 0 1-.175-.275.83.83 0 0 1-.066-.317.83.83 0 0 1 .066-.316c.042-.1.1-.192.175-.275a.96.96 0 0 1 .275-.175.833.833 0 0 1 .634 0c.1.041.191.1.275.175a.96.96 0 0 1 .175.275c.041.1.066.208.066.316a.829.829 0 0 1-.066.317.86.86 0 0 1-.175.275.963.963 0 0 1-.275.175.829.829 0 0 1-.317.067Z"
        fill={fill}
      />
    </svg>
  );
};

export { InfoCircleIcon };
