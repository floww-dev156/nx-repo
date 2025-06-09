import * as React from 'react';
import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const FeaturedPlayIcon = (props: IconPropsType) => {
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
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="m6.67 2.335.03.02 8.791 5.86c.255.17.49.327.672.473.189.153.411.364.54.673.17.41.17.869 0 1.277-.129.31-.351.521-.54.673-.182.146-.418.304-.672.473l-8.82 5.88c-.311.208-.59.394-.828.523-.237.128-.563.275-.944.253a1.666 1.666 0 0 1-1.23-.658c-.23-.304-.288-.657-.312-.926-.025-.268-.025-.604-.025-.978V4.122c0-.374 0-.71.025-.978.024-.27.083-.622.313-.926.294-.389.743-.629 1.23-.658.38-.023.706.124.943.253.237.128.517.315.828.522Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export { FeaturedPlayIcon };
