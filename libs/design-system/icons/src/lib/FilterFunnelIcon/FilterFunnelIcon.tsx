import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const FilterFunnelIcon = (props: IconPropsType) => {
  const { height = 56, width = 56, stroke = colors['primary-600'] } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 56 56"
    >
      <rect width="48" height="48" x="4" y="4" fill="#D1E9FF" rx="24"></rect>
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19.386 21.667c-.756-.846-1.135-1.268-1.149-1.627a1 1 0 01.363-.811c.277-.229.844-.229 1.978-.229h14.843c1.135 0 1.702 0 1.979.229a1 1 0 01.362.81c-.014.36-.392.782-1.148 1.628l-5.707 6.377c-.15.169-.226.253-.28.35a1 1 0 00-.103.27c-.024.108-.024.221-.024.447v5.347c0 .196 0 .294-.032.378a.5.5 0 01-.132.196c-.067.06-.158.097-.34.17l-3.4 1.36c-.367.146-.55.22-.698.189a.5.5 0 01-.315-.213c-.083-.126-.083-.324-.083-.72v-6.707c0-.226 0-.339-.024-.446a1 1 0 00-.104-.272c-.054-.096-.13-.18-.28-.349l-5.706-6.377z"
      ></path>
      <rect
        width="48"
        height="48"
        x="4"
        y="4"
        stroke="#EFF8FF"
        strokeWidth="8"
        rx="24"
      ></rect>
    </svg>
  );
};

export default FilterFunnelIcon;
