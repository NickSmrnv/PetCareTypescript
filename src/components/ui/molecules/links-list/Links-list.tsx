import React, { ReactNode } from "react";
import * as s from "./Links-list-styles";
import { CustomLink } from "../../atoms/custom-link/Custom-link.tsx";

export type LinkType = {
  to: string;
  label?: string;
  icon?: ReactNode;
  onClickLink?: () => void;
};

type LinksListType = {
  links: Array<LinkType>;
  className?: string;
  isBurgerMenuOpen?: boolean;
};

export const LinksList: React.FC<LinksListType> = ({
  links,
  className,
  isBurgerMenuOpen,
}) => {
  return (
    <s.LinksList isBurgerMenuOpen={isBurgerMenuOpen} className={className}>
      {links.map((link, index) => (
        <li key={index}>
          <CustomLink
            to={link.to}
            label={link.label}
            iconLink={link.icon}
            onClick={link.onClickLink}
          />
        </li>
      ))}
    </s.LinksList>
  );
};
