import styled from "styled-components";

const LinksList = styled.ul<{ isBurgerMenuOpen?: boolean }>`
  display: flex;
  align-items: center;
  column-gap: 40px;
  row-gap: 24px;
`;

export { LinksList };
