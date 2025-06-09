import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

interface FeaturedCalendarIconProps extends IconPropsType {
  outerBgColor?: string;
  innerBgColor?: string;
}

const FeaturedCalendarIcon = (
  props: FeaturedCalendarIconProps
): React.ReactElement => {
  const {
    height = 24,
    width = 24,
    fill = colors['primary-100'],
    outerBgColor = colors['primary-600'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      {...rest}
    >
      <rect width="24" height="24" fill={fill} rx="12"></rect>
      <path
        stroke={outerBgColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 11h-9M14 7v2m-4-2v2m-.1 8h4.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 00.656-.656c.163-.32.163-.74.163-1.581v-4.2c0-.84 0-1.26-.163-1.581a1.5 1.5 0 00-.656-.656C15.361 8 14.941 8 14.1 8H9.9c-.84 0-1.26 0-1.581.163a1.5 1.5 0 00-.656.656c-.163.32-.163.74-.163 1.581v4.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 00.656.655c.32.164.74.164 1.581.164z"
      ></path>
    </svg>
  );
};

export { FeaturedCalendarIcon };
