import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const PhoneXWithBackgroundIcon = (props: IconPropsType) => {
  const {
    fill = colors['error-100'],
    stroke = colors['error-600'],
    secondFill = colors['error-50'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={46}
      height={46}
      fill="none"
      {...rest}
      viewBox="0 0 46 46"
    >
      <rect width={40} height={40} x={3} y={3} fill={fill} rx={20} />
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m30.5 15.5-5 5m0-5 5 5m-8.978 4.053a12.17 12.17 0 0 1-2.372-3.342 1.415 1.415 0 0 1-.094-.222.871.871 0 0 1 .123-.718c.04-.056.087-.103.183-.198.29-.292.437-.438.532-.584.359-.552.359-1.265 0-1.817-.095-.146-.241-.292-.532-.584l-.163-.162c-.443-.443-.664-.664-.902-.784a1.666 1.666 0 0 0-1.505 0c-.237.12-.459.341-.902.784l-.131.132c-.441.44-.662.662-.83.962-.188.332-.322.85-.32 1.231 0 .345.067.58.2 1.05a15.865 15.865 0 0 0 4.062 6.903 15.865 15.865 0 0 0 6.903 4.061c.47.134.705.2 1.05.202.381 0 .898-.134 1.231-.32.3-.17.52-.39.962-.831l.132-.132c.442-.443.664-.664.784-.902.24-.473.24-1.031 0-1.504-.12-.238-.341-.46-.784-.902l-.163-.163c-.291-.291-.437-.437-.583-.532a1.667 1.667 0 0 0-1.817 0c-.147.095-.292.24-.584.532-.095.095-.143.143-.198.183a.872.872 0 0 1-.719.122c-.065-.019-.117-.044-.221-.094a12.168 12.168 0 0 1-3.342-2.371Z"
      />
      <rect
        width={40}
        height={40}
        x={3}
        y={3}
        stroke={secondFill}
        strokeWidth={6}
        rx={20}
      />
    </svg>
  );
};

export default PhoneXWithBackgroundIcon;
