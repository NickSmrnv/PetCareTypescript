import * as s from "./Swiper-item-styles.ts";
import { FC } from "react";

export type SwiperItemType = {
  className?: string;
  title: string;
  text: string;
  price?: string;
  imageSrc: string;
  imageAlt: string;
  isGradientBtnBg: boolean;
  textButton: string;
  onClickButton?: () => void;
};

export const SwiperItem: FC<SwiperItemType> = ({
  className,
  title,
  text,
  price,
  imageSrc,
  imageAlt,
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

      <s.ImageSlider src={imageSrc} alt={imageAlt} draggable={false} />
    </s.SwiperItem>
  );
};
