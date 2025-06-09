import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const CodePenIcon = (props: IconPropsType): React.ReactElement => {
  const { height = 20, width = 20, fill = colors['teal-600'] } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M10.38 1.038a1.667 1.667 0 00-.76 0c-.29.068-.544.234-.745.366L1.773 6.02c-.172.11-.388.25-.552.447-.142.17-.249.367-.314.578-.075.245-.074.502-.074.706v4.497c0 .204-.001.461.074.706.065.212.172.409.314.579.164.197.38.336.552.446l7.102 4.617c.201.132.454.298.744.366.25.058.511.058.762 0 .29-.068.543-.234.744-.366l7.102-4.617c.172-.11.388-.25.552-.446.142-.17.249-.367.314-.579.075-.245.075-.502.074-.706V7.751c0-.204.001-.46-.074-.706a1.667 1.667 0 00-.314-.578c-.164-.197-.38-.336-.552-.447l-7.102-4.616c-.201-.132-.454-.298-.744-.366zM2.5 8.618l.004 3.844 6.663 4.335v-3.853L2.5 8.619zm8.333 8.18l6.664-4.34.003-3.84-6.667 4.326v3.853z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export { CodePenIcon };
