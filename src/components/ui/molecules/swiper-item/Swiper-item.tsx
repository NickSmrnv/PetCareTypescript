import * as s from "./Swiper-item-styles.ts";
import { FC } from "react";
import { breakpoints } from "../../../../app/assets/styles/breakpoints-variables.ts";

export type SwiperItemType = {
  className?: string;
  title: string;
  text: string;
  price?: string;
  images: {
    desktop: string;
    desktop2x: string;
    mobile: string;
    mobile2x: string;
  };
  AltText: string;
  isGradientBtnBg: boolean;
  textButton: string;
  onClickButton?: () => void;
};

export const SwiperItem: FC<SwiperItemType> = ({
  className,
  title,
  text,
  price,
  images,
  AltText,
  isGradientBtnBg,
  textButton,
  onClickButton,
}) => {
  return (
    <s.SwiperItem>
      <s.SwiperContent>
        <s.Title isGradientBtnBg={isGradientBtnBg}>{title}</s.Title>
        <s.Text isGradientBtnBg={isGradientBtnBg}>{text}</s.Text>
        {price ? (
          <s.Price>
            от <span>{price}</span> ₽/мес
          </s.Price>
        ) : null}
        <s.ButtonSlider
          className={className}
          isGradientBtnBg={isGradientBtnBg}
          text={textButton}
          onClick={onClickButton}
        />
      </s.SwiperContent>

      <picture>
        <source
          srcSet={`${images.mobile} 1x, ${images.mobile2x} 2x`}
          media={`(max-width: ${breakpoints.SM})`}
          type="image/jpeg"
        />

        <s.ImageSlider
          src={images.desktop}
          srcSet={`${images.desktop} 1x, ${images.desktop2x} 2x`}
          alt={AltText}
          draggable={false}
        />
      </picture>
    </s.SwiperItem>
  );
};
