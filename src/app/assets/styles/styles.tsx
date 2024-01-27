import "./variables.css";
import "./normalize.css";
import { type FC, type ReactNode } from "react";

type StylesType = {
  children: ReactNode;
};

export const Styles: FC<StylesType> = ({ children }) => {
  return <>{children}</>;
};
