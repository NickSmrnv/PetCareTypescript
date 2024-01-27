import styled from "styled-components";
import { breakpoints } from "../../../../app/assets/styles/breakpoints-variables.ts";
import { LinksList } from "../../molecules/links-list/Links-list.tsx";
import { CustomLink } from "../../atoms/custom-link/Custom-link.tsx";

const HeaderWrapper = styled.header`
  & nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 7vw;
    margin-top: 48px;
    margin-bottom: 30px;

    @media (max-width: ${breakpoints.LG}) {
      margin-top: 32px;
    }
  }
`;

const Logo = styled(CustomLink)`
  display: flex;

  @media (max-width: ${breakpoints.LG}) {
    margin-left: auto;
  }
`;

const NavList = styled(LinksList)`
  flex-wrap: wrap;

  @media (max-width: ${breakpoints.LG}) {
    position: fixed;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
    top: ${({ isBurgerMenuOpen }) => (isBurgerMenuOpen ? "0" : "-100%")};
    left: 0;
    background-color: var(--main);
    transition: ease-in-out 0.2s;
  }
`;

const SocialListIcons = styled(LinksList)`
  & a {
    display: flex;
    color: var(--violet);

    &:hover,
    &:active {
      color: var(--main);
    }
  }
`;

export { HeaderWrapper, Logo, NavList, SocialListIcons };
