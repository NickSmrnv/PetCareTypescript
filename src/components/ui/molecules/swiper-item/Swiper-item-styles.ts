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
  flex-shrink: 0;
`;

const SwiperContent = styled.div`
  position: relative;
  display: flex;
  max-width: 1216px;
  flex-direction: column;
  gap: 24px;
  width: 45%;
  z-index: 1;

  & span {
    font: var(--h2);
  }
`;

const Title = styled.h2<ButtonType>`
  font: var(--h1);
  color: ${({ isGradientBtnBg }) =>
    isGradientBtnBg ? "var(--aqua)" : "var(--main)"};
`;

const Text = styled.p<ButtonType>`
  font: var(--h3);
  color: ${({ isGradientBtnBg }) =>
    isGradientBtnBg ? "var(--dark-aqua)" : "var(--main)"};
  margin-bottom: 8px;
`;

const Price = styled.div`
  font: var(--h2);
  font-size: 36px;
  color: var(--main);

  & span {
    font-size: 42px;
  }
`;

const ButtonSlider = styled(Button)`
  font: var(--button);
  width: 300px;
  height: 60px;

  @media (max-width: ${breakpoints.LG}) {
    width: 160px;
    height: 40px;
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
