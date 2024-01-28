import styled, { css } from "styled-components";
import { breakpoints } from "../../../../app/assets/styles/breakpoints-variables.ts";

type ButtonType = {
  isBurgerMenuOpen: boolean;
};

const ButtonContainer = styled.div<ButtonType>`
  display: none;
  cursor: pointer;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  width: 32px;
  height: ${(props) => (props.isBurgerMenuOpen ? "32px" : "22px")};
  background: transparent;
  border: none;
  padding: 0;
  box-sizing: border-box;
  z-index: 5;
  transition: ease-in-out 400ms;

  &:active {
    &:before,
    & span,
    &:after {
      background-color: ${(props) =>
        props.isBurgerMenuOpen ? "var(--violet)" : "var(--aqua)"};
    }
  }

  @media (max-width: ${breakpoints.LG}) {
    display: flex;

    ${(props) =>
      props.isBurgerMenuOpen &&
      css`
        transform: translateX(80vw);
      `}
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    width: 22px;
    height: 2px;
    background-color: var(--violet);
    transition: ease-in-out 300ms;

    ${(props) =>
      props.isBurgerMenuOpen &&
      css`
        width: 100%;
        top: 50%;
        background-color: var(--aqua);
        transform: rotate(-45deg) translateY(-50%);
      `}
  }

  & span {
    opacity: ${(props) => (props.isBurgerMenuOpen ? "0" : "1")};
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 32px;
    height: 2px;
    background-color: var(--violet);
    transition: ease-in-out 300ms;

    ${(props) =>
      props.isBurgerMenuOpen &&
      css`
        width: 100%;
        top: 50%;
        background-color: var(--aqua);
        transform: rotate(45deg) translateY(-50%);
      `}
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 28px;
    height: 2px;
    background-color: var(--violet);
    transition: ease-in-out 300ms;

    ${(props) =>
      props.isBurgerMenuOpen &&
      css`
        width: 100%;
        top: 50%;
        background-color: var(--aqua);
        transform: rotate(45deg) translateY(-50%);
      `}
  }
`;

export { ButtonContainer };
