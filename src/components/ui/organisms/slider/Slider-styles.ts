import styled from "styled-components";
import { breakpoints } from "../../../../app/assets/styles/breakpoints-variables.ts";
import { SwiperButtonNav } from "../../molecules/swiper-button-nav/Swiper-button-nav.tsx";

const SwiperContainer = styled.section`
  position: relative;
  margin-bottom: 70px;

  & .swiper-pagination {
    display: none;
  }

  @media (max-width: ${breakpoints.LG}) {
    padding: 0 clamp(16px, 5.36vw + -1.14px, 20px);
    margin-bottom: 48px;

    & .swiper {
      border-radius: 24px;
      height: 434px;
    }

    & .swiper-pagination {
      display: block;
      bottom: 0;
    }

    & .swiper-pagination-bullet {
      width: 16px;
      height: 16px;
      background-color: var(--aqua);

      &-active {
        background-color: var(--main);
      }
    }
  }
`;

const CustomNextButton = styled(SwiperButtonNav)`
  position: absolute;
  top: 32px;
  right: clamp(80px, 15.63vw + -120px, 112px);
  z-index: 100;
  transition: ease-in-out 300ms;

  @media (max-width: ${breakpoints.LG}) {
    display: none;
  }

  &.swiper-button-disabled button {
    color: var(--aqua);
    cursor: auto;
  }

  &:active {
    opacity: 0.5;
    transform: scale(0.9);
  }
`;

const CustomPrevButton = styled(SwiperButtonNav)`
  position: absolute;
  top: 32px;
  left: clamp(80px, 15.63vw + -120px, 112px);
  z-index: 100;
  transform: rotate(180deg);
  transition: ease-in-out 300ms;

  @media (max-width: ${breakpoints.LG}) {
    display: none;
  }

  &.swiper-button-disabled button {
    color: var(--aqua);
    cursor: auto;
  }

  &:active {
    opacity: 0.5;
    transform: rotate(180deg) scale(0.9);
  }
`;

export { SwiperContainer, CustomNextButton, CustomPrevButton };
