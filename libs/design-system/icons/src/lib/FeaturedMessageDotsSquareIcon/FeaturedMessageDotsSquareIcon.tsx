import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const FeaturedMessageDotsSquareIcon = (props: IconPropsType) => {
  const {
    width = 40,
    height = 40,
    fill = colors['primary-100'],
    secondFill = colors['primary-600'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 40 40"
      {...rest}
    >
      <rect width={40} height={40} fill={fill} rx={20} />
      <path
        fill={secondFill}
        fillRule="evenodd"
        d="M23.536 11.664h-7.069c-.67 0-1.224 0-1.675.037-.469.038-.9.12-1.304.326-.627.32-1.137.83-1.457 1.457-.206.405-.288.835-.326 1.303-.037.451-.037 1.005-.037 1.676v5.316c0 .663 0 1.155.114 1.581a3.333 3.333 0 0 0 2.357 2.357c.256.069.536.096.862.107v1.15c0 .195 0 .395.015.559.014.156.052.452.258.71.238.298.598.471.979.47.33 0 .585-.155.716-.242.137-.09.293-.215.446-.338l2.011-1.608c.433-.346.56-.444.694-.512.134-.068.276-.118.423-.148.147-.03.308-.034.861-.034h2.132c.67 0 1.224 0 1.675-.037.469-.038.9-.12 1.304-.327a3.334 3.334 0 0 0 1.456-1.456c.206-.405.289-.835.327-1.304.037-.45.037-1.004.037-1.675v-4.569c0-.67 0-1.225-.037-1.676-.038-.468-.12-.899-.327-1.303a3.334 3.334 0 0 0-1.456-1.457c-.405-.206-.835-.288-1.304-.326-.45-.037-1.004-.037-1.675-.037ZM15 18.747a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Zm3.75 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Zm5-1.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default FeaturedMessageDotsSquareIcon;
