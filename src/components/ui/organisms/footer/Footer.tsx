import React, { ReactNode } from "react";
import { LinkType } from "../../molecules/links-list/Links-list.tsx";
import * as s from "./Footer-styles.ts";

type FooterType = {
  contactsList: LinkType[];
  text: string;
  iconLogo: ReactNode;
};

export const Footer: React.FC<FooterType> = ({
  contactsList,
  text,
  iconLogo,
}) => {
  return (
    <s.FooterWrapper>
      <s.ContactsInfo links={contactsList} />

      <s.Text>{text}</s.Text>

      <s.Logo to="/" iconLink={iconLogo} />
    </s.FooterWrapper>
  );
};
