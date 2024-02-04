import styled from "styled-components";
import { breakpoints } from "./breakpoints-variables";

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 clamp(80px, 15.63vw + -120px, 112px);

  @media (max-width: ${breakpoints.LG}) {
    padding: 0 clamp(16px, 5.36vw + -1.14px, 20px);
  }
`;

export { Container };
