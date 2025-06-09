import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const ArrowBlockUp = (props: IconPropsType) => {
  const { fill = colors['green-600'] } = props;

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
        d="M15.556 3.557c.52-.521 1.365-.521 1.886 0l9.333 9.333a1.333 1.333 0 0 1-.943 2.276h-4v12.297c0 .16 0 .349-.013.516a2.014 2.014 0 0 1-.205.762 2 2 0 0 1-.874.874 2.01 2.01 0 0 1-.761.204 6.58 6.58 0 0 1-.516.014h-5.929c-.158 0-.348 0-.515-.014a2.01 2.01 0 0 1-.762-.204 2 2 0 0 1-.874-.874 2.01 2.01 0 0 1-.204-.762 6.58 6.58 0 0 1-.014-.515V15.165h-4a1.333 1.333 0 0 1-.942-2.276l9.333-9.333Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export { ArrowBlockUp };
