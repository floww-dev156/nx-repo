import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

interface PlusSquareProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
}

const PlusSquare = (props: PlusSquareProps) => {
  const { width = 20, height = 20, fill = colors['gray-400'], ...rest } = props;
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.866 1.667H5.135c-.44 0-.819 0-1.13.025-.33.027-.658.087-.973.247a2.5 2.5 0 0 0-1.093 1.093c-.16.315-.22.643-.247.972-.025.313-.025.692-.025 1.13v9.732c0 .44 0 .818.025 1.13.027.33.087.657.247.973a2.5 2.5 0 0 0 1.093 1.092c.315.16.643.22.972.247.312.026.691.026 1.13.026h9.732c.439 0 .818 0 1.13-.026.33-.027.657-.086.972-.247a2.5 2.5 0 0 0 1.093-1.092c.16-.316.22-.643.247-.973.025-.312.025-.69.025-1.13V5.135c0-.44 0-.818-.025-1.13-.027-.33-.087-.658-.247-.973a2.5 2.5 0 0 0-1.093-1.093c-.315-.16-.643-.22-.972-.247-.312-.025-.691-.025-1.13-.025ZM10 5.834c.46 0 .833.373.833.833v2.5h2.5a.833.833 0 0 1 0 1.667h-2.5v2.5a.833.833 0 0 1-1.666 0v-2.5h-2.5a.833.833 0 0 1 0-1.667h2.5v-2.5c0-.46.373-.833.833-.833Z"
        fill={fill}
      />
    </svg>
  );
};

export { PlusSquare };
