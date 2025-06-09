import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const FeaturedPhoneCallIcon = (props: IconPropsType) => {
  const {
    height = 40,
    width = 40,
    fill = colors['primary-50'],
    stroke = colors['primary-600'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
      {...rest}
    >
      <rect width="40" height="40" fill={fill} rx="20"></rect>
      <g clipPath="url(#clip0_365_108681)">
        <path
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.667"
          d="M21.708 15A4.166 4.166 0 0125 18.292m-3.292-6.625a7.5 7.5 0 016.625 6.617m-9.81 3.269a12.169 12.169 0 01-2.373-3.342 1.419 1.419 0 01-.094-.221.871.871 0 01.123-.719c.04-.055.087-.103.183-.198.29-.291.437-.437.532-.584.359-.552.359-1.264 0-1.817-.095-.146-.241-.292-.532-.583l-.163-.162c-.443-.443-.664-.665-.902-.785a1.667 1.667 0 00-1.504 0c-.238.12-.46.342-.903.785l-.13.13c-.442.442-.663.663-.832.963-.187.333-.321.85-.32 1.232.001.344.068.579.201 1.05a15.866 15.866 0 004.062 6.902 15.866 15.866 0 006.903 4.062c.47.133.705.2 1.05.201.381.001.898-.133 1.231-.32.3-.169.521-.39.962-.83l.132-.132c.443-.443.664-.665.784-.902.24-.473.24-1.032 0-1.505-.12-.238-.341-.46-.784-.902l-.163-.162c-.291-.292-.437-.437-.583-.533a1.667 1.667 0 00-1.817 0c-.147.096-.292.241-.584.533a1.685 1.685 0 01-.198.182.872.872 0 01-.719.123c-.065-.02-.117-.044-.221-.094a12.169 12.169 0 01-3.342-2.372z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_365_108681">
          <path
            fill="#fff"
            d="M0 0H20V20H0z"
            transform="translate(10 10)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default FeaturedPhoneCallIcon;
