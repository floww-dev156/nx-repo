import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const FeaturedStars02Icon = (props: IconPropsType) => {
  const {
    width = 40,
    height = 40,
    fill = colors['moss-100'],
    secondFill = colors['moss-500'],
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
      <rect width={40} height={40} fill={fill} rx={20} />
      <path
        fill={secondFill}
        d="M15.582 11.67a.833.833 0 1 0-1.667 0v1.25h-1.25a.833.833 0 1 0 0 1.666h1.25v1.25a.833.833 0 1 0 1.667 0v-1.25h1.25a.833.833 0 1 0 0-1.667h-1.25v-1.25ZM15.582 24.17a.833.833 0 1 0-1.667 0v1.25h-1.25a.833.833 0 1 0 0 1.666h1.25v1.25a.833.833 0 1 0 1.667 0v-1.25h1.25a.833.833 0 1 0 0-1.667h-1.25v-1.25ZM22.61 12.204a.833.833 0 0 0-1.556 0L19.61 15.96c-.25.65-.329.838-.437.99-.108.151-.24.284-.392.392-.151.108-.339.186-.99.437l-3.757 1.445a.833.833 0 0 0 0 1.555l3.757 1.445c.651.25.839.33.99.437.152.108.284.24.392.393.108.15.187.338.437.99l1.445 3.757a.833.833 0 0 0 1.556 0l1.445-3.758c.25-.65.329-.838.437-.99.107-.151.24-.284.392-.392.151-.107.339-.186.99-.436l3.757-1.446a.833.833 0 0 0 0-1.555l-3.757-1.445c-.651-.25-.839-.33-.99-.437a1.667 1.667 0 0 1-.392-.392c-.108-.152-.187-.34-.437-.99l-1.445-3.758Z"
      />
    </svg>
  );
};

export default FeaturedStars02Icon;
