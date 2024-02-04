import styled from "styled-components";
import { ButtonNav } from "../../atoms/button-nav/Button-nav.tsx";

const SwiperButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--white);
`;

const NavButton = styled(ButtonNav)`
  color: var(--main);
  width: 100%;
  height: 100%;
`;

export { SwiperButton, NavButton };
