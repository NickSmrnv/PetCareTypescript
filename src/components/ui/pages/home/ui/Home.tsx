import { Slider } from "../../../organisms/slider/Slider.tsx";
import { SwiperItemType } from "../../../molecules/swiper-item/Swiper-item.tsx";

export const Home = () => {
  const scrollToFooter = () => {
    const footer = document.querySelector("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  const SlidesList: Array<SwiperItemType> = [
    {
      title: "Мы заботимся\n" + "о ваших питомцах",
      text:
        "Записывайтесь в ветклиники\n" +
        "и консультируйтесь с ветеринарным врачом онлайн",
      images: {
        desktop: "../src/app/assets/images/Slide-1-desktop.jpg",
        desktop2x: "../src/app/assets/images/Slide-1-desktop@2x.jpg",
        mobile: "../src/app/assets/images/Slide-1-mobile.jpg",
        mobile2x: "../src/app/assets/images/Slide-1-mobile@2x.jpg",
      },
      AltText: "Серый полосатый кот сидит.",
      isGradientBtnBg: true,
      textButton: "Связаться с нами",
      onClickButton: scrollToFooter,
    },

    {
      title: "Закажите план заботы",
      text: "Регулярная доставка специально подобранного корма и других товаров для кошек и собак",
      price: "1299",
      images: {
        desktop: "../src/app/assets/images/Slide-2-desktop.jpg",
        desktop2x: "../src/app/assets/images/Slide-2-desktop@2x.jpg",
        mobile: "../src/app/assets/images/Slide-2-mobile.jpg",
        mobile2x: "../src/app/assets/images/Slide-2-mobile@2x.jpg",
      },
      AltText: "Голова коричневой собаки с красным ошейником.",
      isGradientBtnBg: false,
      textButton: "Подобрать план",
    },
  ];

  return (
    <div>
      <Slider items={SlidesList} />
    </div>
  );
};
