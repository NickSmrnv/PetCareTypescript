import { ButtonNavType } from "../../atoms/button-nav/Button-nav.tsx";
import { FC } from "react";
import * as s from "./Swiper-button-nav-styles.ts";

export const SwiperButtonNav: FC<ButtonNavType> = ({
  className,
  icon,
  onClick,
}) => {
  return (
    <s.SwiperButton className={className}>
      <s.NavButton icon={icon} onClick={onClick} />
    </s.SwiperButton>
  );
};
