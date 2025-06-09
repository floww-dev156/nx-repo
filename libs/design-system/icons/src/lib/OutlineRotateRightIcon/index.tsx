import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

function OutlineRotateRightIcon(props: IconPropsType) {
  const { fill = colors['blue-gray-600'], ...rest } = props;

  return (
    <svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      {...rest}
    >
      <path
        d="M9 17.062c-3.9 0-7.064-3.172-7.064-7.065C1.936 6.105 5.1 2.925 9 2.925c.802 0 1.582.112 2.332.345.3.09.465.405.375.705a.563.563 0 0 1-.705.375 6.849 6.849 0 0 0-2.002-.3 5.944 5.944 0 0 0-5.94 5.94A5.944 5.944 0 0 0 9 15.93a5.944 5.944 0 0 0 4.942-9.24.56.56 0 0 1 .158-.78.56.56 0 0 1 .78.157 7.024 7.024 0 0 1 1.192 3.93c-.008 3.893-3.173 7.065-7.072 7.065Z"
        fill={fill}
      />
      <path
        d="M12.098 4.553a.572.572 0 0 1-.427-.195l-2.168-2.49a.567.567 0 0 1 .053-.795.567.567 0 0 1 .795.052l2.167 2.49a.567.567 0 0 1-.052.795.515.515 0 0 1-.368.143Z"
        fill={fill}
      />
      <path
        d="M9.57 6.397a.576.576 0 0 1-.457-.232.57.57 0 0 1 .12-.788l2.527-1.845a.564.564 0 0 1 .668.908L9.9 6.292a.525.525 0 0 1-.33.105Z"
        fill={fill}
      />
    </svg>
  );
}

export { OutlineRotateRightIcon };
