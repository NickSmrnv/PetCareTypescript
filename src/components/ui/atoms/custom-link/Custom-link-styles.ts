import styled from "styled-components";
import { breakpoints } from "../../../../app/assets/styles/breakpoints-variables.ts";
import { NavLink } from "react-router-dom";

const CustomLink = styled(NavLink)`
  display: block;
  font: var(--p2);
  color: var(--gray);
  white-space: nowrap;
  text-underline-offset: 15px;
  text-decoration-thickness: 3px;
  transition: ease-in-out 200ms;

  @media (max-width: ${breakpoints.LG}) {
    color: var(--aqua);
    text-decoration: none;
  }

  &:hover {
    color: var(--violet);
  }

  &:active {
    opacity: 0.6;
    transform: scale(0.96);
  }
`;

export { CustomLink };
