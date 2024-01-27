import { FC, ReactNode } from "react";
import * as s from "./Custom-link-styles";

type CustomLinkType = {
  className?: string;
  label?: string;
  to: string;
  onClick?: () => void;
  iconLink?: ReactNode;
};

export const CustomLink: FC<CustomLinkType> = ({
  className,
  to,
  label,
  onClick,
  iconLink,
}) => {
  return (
    <s.CustomLink className={className} to={to} onClick={onClick}>
      {label}
      {iconLink}
    </s.CustomLink>
  );
};
