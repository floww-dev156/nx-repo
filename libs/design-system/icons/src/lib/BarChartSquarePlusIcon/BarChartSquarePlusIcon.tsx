import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const BarChartSquarePlusIcon = (props: IconPropsType) => {
  const { fill = colors['primary-600'], ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={21}
      height={20}
      fill="none"
      {...rest}
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.501 2.497h3.5c1.4 0 2.1 0 2.635.273a2.5 2.5 0 0 1 1.093 1.092C18 4.397 18 5.097 18 6.497v7c0 1.4 0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.093c-.534.272-1.235.272-2.635.272h-7c-1.4 0-2.1 0-2.635-.272a2.5 2.5 0 0 1-1.092-1.093C3 15.598 3 14.897 3 13.497v-3.5m4.167.834v3.333m6.667-5v5M10.5 5.831v8.333m-5.833-7.5v-5m-2.5 2.5h5"
      />
    </svg>
  );
};
export { BarChartSquarePlusIcon };
