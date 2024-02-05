import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import * as s from "./Slider-styles.ts";
import {
  SwiperItem,
  SwiperItemType,
} from "../../molecules/swiper-item/Swiper-item.tsx";
import { FC } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { IconArrow } from "../../atoms/_icons/Icon-arrow.tsx";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export type SliderType = {
  items: Array<SwiperItemType>;
};

export const Slider: FC<SliderType> = ({ items }) => {
  const swiper = useSwiper();

  return (
    <s.SwiperContainer>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: ".custom-prev-button",
          nextEl: ".custom-next-button",
        }}
        pagination={{
          clickable: true,
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide>
            <SwiperItem key={index} {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <s.CustomNextButton
        className={"custom-next-button"}
        icon={<IconArrow width={32} height={32} />}
        onClick={() => swiper.slideNext()}
      />
      <s.CustomPrevButton
        className={"custom-prev-button"}
        icon={<IconArrow width={32} height={32} />}
        onClick={() => swiper.slidePrev()}
      />
    </s.SwiperContainer>
  );
};
