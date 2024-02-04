import { FC, ReactNode } from "react";
import * as s from "./Button-nav-styles.ts";

export type ButtonNavType = {
  className?: string;
  icon: ReactNode;
  onClick?: () => void;
};

export const ButtonNav: FC<ButtonNavType> = ({ className, icon, onClick }) => {
  return (
    <s.ButtonNav className={className} onClick={onClick}>
      {icon}
    </s.ButtonNav>
  );
};
