import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const AlertOctagonIcon = (props: IconPropsType) => {
  const { fill = colors['gray-700'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      {...rest}
      viewBox="0 0 16 16"
    >
      <g clipPath="url(#a)">
        <path
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 5.333V8m0 2.667h.006M1.333 5.682v4.636c0 .163 0 .245.018.321a.666.666 0 0 0 .08.193c.041.067.1.125.214.24l3.282 3.282c.116.116.173.173.24.214.06.037.125.064.193.08.077.019.158.019.321.019h4.637c.163 0 .244 0 .321-.019a.668.668 0 0 0 .193-.08c.067-.04.125-.098.24-.214l3.282-3.282c.115-.115.173-.173.214-.24a.664.664 0 0 0 .08-.193c.018-.076.018-.158.018-.32V5.681c0-.163 0-.245-.018-.322a.664.664 0 0 0-.08-.192c-.041-.068-.099-.125-.214-.24l-3.282-3.282a1.43 1.43 0 0 0-.24-.215.668.668 0 0 0-.193-.08c-.077-.018-.158-.018-.321-.018H5.682c-.164 0-.245 0-.322.019a.667.667 0 0 0-.193.08c-.067.04-.124.098-.24.214L1.645 4.928a1.426 1.426 0 0 0-.214.24.667.667 0 0 0-.08.192c-.018.077-.018.159-.018.322Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AlertOctagonIcon;
