import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const FilledAlarmClockPlusIcon = (props: IconPropsType): React.ReactElement => {
  const {
    height = 20,
    width = 20,
    fill = colors['primary-600'],
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
        fill={fill}
        d="M4.755 3.09a.833.833 0 1 0-1.179-1.18l-2.5 2.5a.833.833 0 1 0 1.179 1.18l2.5-2.5ZM16.421 1.91a.833.833 0 1 0-1.178 1.18l2.5 2.5a.833.833 0 0 0 1.178-1.18l-2.5-2.5Z"
      />
      <path
        fill={fill}
        fillRule="evenodd"
        d="M9.999 18.333a7.5 7.5 0 0 0 4.68-1.64l1.397 1.396a.833.833 0 1 0 1.179-1.178l-1.397-1.396a7.5 7.5 0 1 0-11.719 0L2.743 16.91a.833.833 0 1 0 1.178 1.178l1.396-1.396A7.5 7.5 0 0 0 10 18.333Zm0-10.833c.46 0 .833.373.833.833V10h1.667a.833.833 0 0 1 0 1.667h-1.667v1.666a.833.833 0 1 1-1.667 0v-1.666H7.5a.833.833 0 1 1 0-1.667h1.666V8.333c0-.46.373-.833.834-.833Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export { FilledAlarmClockPlusIcon };
