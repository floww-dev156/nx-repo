import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const Settings02Icon = (props: IconPropsType): React.ReactElement => {
  const { fill = colors['gray-500'], height = 18, width = 18, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 18 18"
      {...rest}
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.667}
        d="m7.046 14.528.439.986a1.66 1.66 0 0 0 3.033 0l.438-.986a1.819 1.819 0 0 1 1.853-1.067l1.072.114a1.659 1.659 0 0 0 1.517-2.627l-.635-.872A1.822 1.822 0 0 1 14.418 9c0-.385.122-.76.348-1.072l.635-.872a1.659 1.659 0 0 0-1.516-2.627l-1.073.114a1.82 1.82 0 0 1-1.852-1.072l-.442-.985a1.659 1.659 0 0 0-3.033 0l-.439.986a1.82 1.82 0 0 1-1.852 1.071L4.118 4.43a1.66 1.66 0 0 0-1.517 2.627l.635.872a1.822 1.822 0 0 1 0 2.144l-.635.872a1.658 1.658 0 0 0 1.517 2.627l1.072-.114a1.825 1.825 0 0 1 1.856 1.071Z"
      />
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.667}
        d="M9 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
      />
    </svg>
  );
};

export default Settings02Icon;
