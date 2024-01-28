import styled from "styled-components";
import { CustomLink } from "../../atoms/custom-link/Custom-link.tsx";
import { LinksList } from "../../molecules/links-list/Links-list.tsx";
import { breakpoints } from "../../../../app/assets/styles/breakpoints-variables.ts";

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;

  @media (max-width: ${breakpoints.LG}) {
    flex-direction: column;
    gap: 32px;
    padding-top: 24px;
  }
`;

const ContactsInfo = styled(LinksList)`
  flex-direction: column;
  gap: 8px;

  a {
    color: var(--violet);

    &:hover,
    &:active {
      color: var(--main);
    }
  }
`;

const Text = styled.p`
  font: var(--p5);
  text-align: center;

  @media (max-width: ${breakpoints.LG}) {
    white-space: break-spaces;
  }
`;

const Logo = styled(CustomLink)`
  display: flex;

  @media (max-width: ${breakpoints.LG}) {
    order: -1;
  }
`;

export { FooterWrapper, ContactsInfo, Text, Logo };
