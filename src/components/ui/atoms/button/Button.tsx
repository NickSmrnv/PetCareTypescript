import { FC } from "react";
import * as s from "./Button-styles.ts";

type ButtonType = {
  className?: string;
  text: string;
  isGradientBtnBg: boolean;
  onClick?: () => void;
};

export const Button: FC<ButtonType> = ({
  className,
  text,
  isGradientBtnBg,
  onClick,
}) => {
  return (
    <s.Button
      className={className}
      isGradientBtnBg={isGradientBtnBg}
      onClick={onClick}
    >
      {text}
    </s.Button>
  );
};
