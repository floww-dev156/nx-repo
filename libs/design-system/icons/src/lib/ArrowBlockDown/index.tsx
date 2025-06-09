import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const ArrowBlockDown = (props: IconPropsType) => {
  const { fill = colors['error-600'] } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={33}
      height={33}
      fill="none"
      viewBox="0 0 33 33"
      {...props}
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M13.535 3.166h5.928c.159 0 .348 0 .515.014.194.015.471.056.762.204a2 2 0 0 1 .874.874c.148.29.189.568.205.762.013.167.013.356.013.515v12.298h4a1.333 1.333 0 0 1 .943 2.276l-9.333 9.333c-.521.52-1.365.52-1.886 0L6.223 20.11a1.333 1.333 0 0 1 .942-2.276h4V5.536c0-.16 0-.35.014-.516a2.01 2.01 0 0 1 .204-.762 2 2 0 0 1 .874-.874 2.01 2.01 0 0 1 .762-.204c.167-.014.357-.014.516-.014Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export { ArrowBlockDown };
