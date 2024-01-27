import React, { ReactNode } from "react";
import * as s from "./Header-styles";
import { LinkType } from "../../molecules/links-list/Links-list.tsx";
import { ButtonBurger } from "../../atoms/button-burger/Button-burger.tsx";

type HeaderType = {
  iconLogo?: ReactNode;
  isBurgerMenuOpen: boolean;
  toggleBurgerMenu: () => void;
  isTablet: boolean;
  navList: LinkType[];
  socialList: LinkType[];
};

export const Header: React.FC<HeaderType> = ({
  iconLogo,
  isBurgerMenuOpen,
  toggleBurgerMenu,
  isTablet,
  navList,
  socialList,
}) => {
  return (
    <s.HeaderWrapper>
      <nav>
        {isTablet && (
          <ButtonBurger
            onClick={toggleBurgerMenu}
            isBurgerMenuOpen={isBurgerMenuOpen}
          />
        )}

        <s.Logo to="/" iconLink={iconLogo} />

        <s.NavList links={navList} isBurgerMenuOpen={isBurgerMenuOpen} />

        {!isTablet && <s.SocialListIcons links={socialList} />}
      </nav>
    </s.HeaderWrapper>
  );
};
