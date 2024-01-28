import React, { ReactNode } from "react";
import * as s from "./Header-styles";
import { LinkType } from "../../molecules/links-list/Links-list.tsx";
import { ButtonBurger } from "../../atoms/button-burger/Button-burger.tsx";

type HeaderType = {
  className?: string;
  iconLogo?: ReactNode;
  isBurgerMenuOpen: boolean;
  toggleBurgerMenu: () => void;
  isTablet: boolean;
  navList: LinkType[];
  socialList: LinkType[];
};

export const Header: React.FC<HeaderType> = ({
  className,
  iconLogo,
  isBurgerMenuOpen,
  toggleBurgerMenu,
  isTablet,
  navList,
  socialList,
}) => {
  return (
    <s.HeaderWrapper>
      {isTablet && (
        <ButtonBurger
          onClick={toggleBurgerMenu}
          isBurgerMenuOpen={isBurgerMenuOpen}
        />
      )}

      <s.Logo to="/" iconLink={iconLogo} />

      <s.NavWrapper isBurgerMenuOpen={isBurgerMenuOpen}>
        <s.NavList className={className} links={navList} />
      </s.NavWrapper>

      {!isTablet && (
        <s.SocialListIcons className={className} links={socialList} />
      )}
    </s.HeaderWrapper>
  );
};
