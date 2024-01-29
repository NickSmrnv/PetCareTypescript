import styled from "styled-components";

type ButtonType = {
  isGradientBtnBg: boolean;
};

const Button = styled.button<ButtonType>`
  display: inline-flex;
  padding: 17px 20px 16px;
  justify-content: center;
  align-items: center;
  font: var(--button);
  color: var(--white);
  border-radius: 40px;
  min-width: clamp(120px, 3vw, 300px);
  background: ${(props) =>
    props.isGradientBtnBg ? "var(--gradient-light)" : "var(--main)"};
  box-sizing: border-box;
  transition: ease-in-out 300ms;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
    transform: scale(0.95);
  }
`;

export { Button };
