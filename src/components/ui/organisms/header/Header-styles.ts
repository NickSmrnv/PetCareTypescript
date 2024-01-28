import styled from "styled-components";
import { breakpoints } from "../../../../app/assets/styles/breakpoints-variables.ts";
import { LinksList } from "../../molecules/links-list/Links-list.tsx";
import { CustomLink } from "../../atoms/custom-link/Custom-link.tsx";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 7vw;
  margin-top: 48px;
  margin-bottom: 30px;

  @media (max-width: ${breakpoints.LG}) {
    margin-top: 32px;
  }
  & nav {
  }
`;

const Logo = styled(CustomLink)`
  display: flex;

  @media (max-width: ${breakpoints.LG}) {
    margin-left: auto;
  }
`;

const NavWrapper = styled.nav<{ isBurgerMenuOpen: boolean }>`
  @media (max-width: ${breakpoints.LG}) {
    position: fixed;
    width: 100%;

    top: ${({ isBurgerMenuOpen }) => (isBurgerMenuOpen ? "0" : "-100%")};
    left: 0;
    background-color: var(--main);
    transition: ease-in-out 0.2s;
  }
`;

const NavList = styled(LinksList)`
  flex-wrap: wrap;
  column-gap: 40px;
  row-gap: 24px;

  @media (max-width: ${breakpoints.LG}) {
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }
`;

const SocialListIcons = styled(LinksList)`
  gap: 28px;

  & a {
    display: flex;
    color: var(--violet);

    &:hover,
    &:active {
      color: var(--main);
    }
  }
`;

export { HeaderWrapper, Logo, NavWrapper, NavList, SocialListIcons };
