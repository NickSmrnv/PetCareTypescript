import styled from "styled-components";
import { Button } from "../../atoms/button/Button.tsx";
import { breakpoints } from "../../../../app/assets/styles/breakpoints-variables.ts";
import { SwiperSlide } from "swiper/react";

type ButtonType = {
  isGradientBtnBg: boolean;
};

const SwiperItem = styled(SwiperSlide)`
  position: relative;
  width: 100%;
  height: 600px;
  padding: 105px 112px 0;
  margin: 0 auto;

  @media (max-width: ${breakpoints.LG}) {
    padding: 32px 24px 20px;
    height: 400px;
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 115px;
    background-image: url("../../../../../src/app/assets/images/Subtract-arc.png");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: bottom;
    bottom: 0;
    left: 0;
    z-index: 20;

    @media (max-width: ${breakpoints.LG}) {
      display: none;
    }
  }
`;

const SwiperContent = styled.div`
  position: relative;
  display: flex;
  max-width: 1216px;
  flex-direction: column;
  gap: 24px;
  width: 48%;
  z-index: 1;

  @media (max-width: ${breakpoints.XL}) {
    width: 60%;
  }

  @media (max-width: ${breakpoints.LG}) {
    width: 82%;
    height: 100%;
    gap: 16px;
  }

  @media (max-width: ${breakpoints.MD}) {
    width: 86%;
  }

  & span {
    font: var(--h2);
  }
`;

const Title = styled.h2<ButtonType>`
  font: var(--h1);
  color: ${({ isGradientBtnBg }) =>
    isGradientBtnBg ? "var(--aqua)" : "var(--main)"};
  white-space: pre-line;
`;

const Text = styled.p<ButtonType>`
  font: var(--h3);
  color: ${({ isGradientBtnBg }) =>
    isGradientBtnBg ? "var(--dark-aqua)" : "var(--main)"};
  margin-bottom: 8px;

  @media (max-width: ${breakpoints.LG}) {
    width: 65%;
  }
`;

const Price = styled.div`
  font: var(--h2);
  font-size: 36px;
  color: var(--main);

  @media (max-width: ${breakpoints.LG}) {
    font-size: 18px;
  }

  & span {
    font-size: 42px;

    @media (max-width: ${breakpoints.LG}) {
      font-size: 22px;
    }
  }
`;

const ButtonSlider = styled(Button)`
  font: var(--button);
  width: 300px;
  height: 60px;

  @media (max-width: ${breakpoints.LG}) {
    width: 160px;
    height: 40px;
    margin-top: ${({ isGradientBtnBg }) => (isGradientBtnBg ? "5px" : "auto")};
  }
`;

const ImageSlider = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  top: 0;
  right: 0;
`;

export {
  SwiperItem,
  SwiperContent,
  Title,
  Text,
  Price,
  ButtonSlider,
  ImageSlider,
};
