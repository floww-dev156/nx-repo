import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const BriefCase01Icon = (props: IconPropsType) => {
  const {
    width = 20,
    height = 20,
    fill = colors['primary-600'],
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
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.333 5.833c0-.775 0-1.162-.085-1.48a2.5 2.5 0 0 0-1.768-1.768C11.162 2.5 10.775 2.5 10 2.5s-1.162 0-1.48.085a2.5 2.5 0 0 0-1.768 1.768c-.085.318-.085.705-.085 1.48M4.333 17.5h11.334c.933 0 1.4 0 1.756-.182.314-.16.569-.414.729-.728.181-.357.181-.823.181-1.757V8.5c0-.933 0-1.4-.181-1.757a1.667 1.667 0 0 0-.729-.728c-.356-.182-.823-.182-1.756-.182H4.333c-.933 0-1.4 0-1.756.182-.314.16-.569.415-.729.728-.181.357-.181.824-.181 1.757v6.333c0 .934 0 1.4.181 1.757.16.314.415.569.729.728.356.182.823.182 1.756.182Z"
      />
    </svg>
  );
};

export { BriefCase01Icon };
