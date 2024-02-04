import { FC } from "react";
import * as React from "react";
export const IconArrow: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 5a1 1 0 0 1 .71.29l8.58 8.59a3 3 0 0 1 0 4.24l-8.58 8.59a1.004 1.004 0 1 1-1.42-1.42l8.59-8.58a1.002 1.002 0 0 0 0-1.42l-8.59-8.58A1.001 1.001 0 0 1 12 5Z"
    />
  </svg>
);
