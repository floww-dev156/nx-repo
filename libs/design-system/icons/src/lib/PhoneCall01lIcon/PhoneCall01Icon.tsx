import * as React from 'react';
import { colors } from '@nx-repo/shared-style-guide';
import { IconPropsType } from '../types';

const PhoneCall01Icon = (iconProps: IconPropsType) => {
  const {
    stroke = colors['primary-600'],
    width = 12,
    height = 12,
    ...props
  } = iconProps;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11.707 5A4.167 4.167 0 0 1 15 8.29m-3.292-6.625a7.5 7.5 0 0 1 6.625 6.617m-9.81 3.269A12.168 12.168 0 0 1 6.15 8.21a1.415 1.415 0 0 1-.094-.221.872.872 0 0 1 .122-.719c.04-.055.088-.103.183-.198.291-.292.437-.437.532-.584.36-.552.36-1.264 0-1.817-.095-.146-.24-.292-.532-.583l-.163-.163c-.442-.442-.664-.664-.902-.784a1.667 1.667 0 0 0-1.504 0c-.238.12-.46.342-.902.784l-.132.132c-.441.441-.662.662-.83.962-.187.333-.322.85-.32 1.232 0 .344.067.58.2 1.05a15.866 15.866 0 0 0 4.062 6.903 15.865 15.865 0 0 0 6.903 4.06c.47.134.706.201 1.05.202.381.001.899-.133 1.232-.32.3-.169.52-.39.962-.83l.131-.132c.443-.443.664-.665.785-.902.239-.473.239-1.032 0-1.505-.12-.238-.342-.46-.785-.902l-.162-.162c-.292-.292-.437-.437-.584-.533a1.667 1.667 0 0 0-1.817 0c-.146.096-.292.241-.583.533a1.686 1.686 0 0 1-.199.182.872.872 0 0 1-.718.123 1.415 1.415 0 0 1-.222-.094 12.17 12.17 0 0 1-3.341-2.372Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export { PhoneCall01Icon };
