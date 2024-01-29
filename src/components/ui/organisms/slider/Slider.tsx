import * as s from "./Slider-styles.ts";
import {
  SwiperItem,
  SwiperItemType,
} from "../../molecules/swiper-item/Swiper-item.tsx";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export type SliderType = {
  items: Array<SwiperItemType>;
};
export const Slider: FC<SliderType> = ({ items }) => {
  return (
    <s.SwiperContainer>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {items.map((item, index) => (
          <SwiperSlide>
            <SwiperItem key={index} {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </s.SwiperContainer>
  );
};
