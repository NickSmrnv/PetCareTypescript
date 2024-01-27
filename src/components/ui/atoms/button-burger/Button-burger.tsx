import { FC } from "react";
import * as s from "./Button-burger-styles.ts";

type ButtonBurgerType = {
  onClick: () => void;
  isBurgerMenuOpen: boolean;
};

export const ButtonBurger: FC<ButtonBurgerType> = ({
  onClick,
  isBurgerMenuOpen,
}) => {
  return (
    <s.ButtonContainer onClick={onClick} isBurgerMenuOpen={isBurgerMenuOpen}>
      <span />
    </s.ButtonContainer>
  );
};
