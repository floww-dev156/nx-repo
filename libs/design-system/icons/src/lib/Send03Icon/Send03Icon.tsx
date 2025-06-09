import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const Send03Icon = (props: IconPropsType): React.ReactElement => {
  const { height = 20, fill = colors['gray-400'], width = 20, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 20 20"
      {...rest}
      fill="none"
      stroke={'none'}
    >
      <path
        fill={fill}
        d="M18.439 10.552a1.25 1.25 0 0 0 0-1.108c-.152-.308-.42-.47-.558-.547-.148-.084-.339-.17-.53-.255L3.366 2.348a7 7 0 0 0-.552-.231c-.15-.052-.452-.147-.787-.054a1.25 1.25 0 0 0-.829.748c-.127.323-.063.634-.026.788.04.169.106.37.173.573l1.354 4.079c.11.328.164.492.265.614.09.107.205.19.334.241.148.058.32.058.667.058H10a.833.833 0 0 1 0 1.667H3.98c-.346 0-.518 0-.665.058a.83.83 0 0 0-.334.24c-.102.12-.156.285-.266.612L1.35 15.817c-.068.203-.135.405-.175.574-.037.155-.102.466.025.79.142.366.45.644.828.75.335.093.639-.002.789-.054.164-.057.358-.144.553-.232l13.982-6.292c.19-.085.38-.171.53-.255.138-.078.404-.239.556-.546"
      ></path>
    </svg>
  );
};

export default Send03Icon;
