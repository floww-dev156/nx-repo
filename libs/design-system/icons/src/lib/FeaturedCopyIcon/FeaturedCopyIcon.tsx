import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const FeaturedCopyIcon = (props: IconPropsType) => {
  const { fill = colors['primary-600'], ...rest } = props;

  return (
    <svg
      width={56}
      height={56}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 56 56"
      {...rest}
    >
      <rect width={48} height={48} x={4} y={4} fill="#D1E9FF" rx={24} />
      <rect
        width={48}
        height={48}
        x={4}
        y={4}
        stroke="#EFF8FF"
        strokeWidth={8}
        rx={24}
      />
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M26.5 18.003c-.675.009-1.08.048-1.408.215a2 2 0 0 0-.874.874c-.167.328-.206.733-.215 1.408M35.5 18.003c.675.009 1.08.048 1.408.215a2 2 0 0 1 .874.874c.167.328.206.733.215 1.408m0 9c-.009.675-.048 1.08-.215 1.408a2 2 0 0 1-.874.874c-.328.167-.733.206-1.408.215M38 24v2m-8-8h2M21.2 38h7.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C32 36.48 32 35.92 32 34.8v-7.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C30.48 24 29.92 24 28.8 24h-7.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C18 25.52 18 26.08 18 27.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C19.52 38 20.08 38 21.2 38Z"
      />
    </svg>
  );
};

export { FeaturedCopyIcon };
