import * as React from "react";
import { FC } from "react";
export const IconTelegram: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="currentColor"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        d="m.692 18.66 9.781 4.875c.379.187.825.173 1.187-.038l8.707-5.062-5.27 4.67a1.251 1.251 0 0 0-.422.937v11.375c0 1.2 1.532 1.705 2.25.751l4.228-5.621 10.457 5.955a1.25 1.25 0 0 0 1.843-.84l6.522-32.5c.195-.977-.777-1.774-1.68-1.41L.795 16.377c-1.007.393-1.072 1.801-.103 2.283ZM37.075 4.912l-5.732 28.561-9.908-5.643a1.253 1.253 0 0 0-1.618.335l-2.642 3.512v-7.074l14.252-12.626c1.128-.999-.169-2.774-1.457-2.017L10.987 20.997l-6.654-3.315 32.742-12.77Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
);
